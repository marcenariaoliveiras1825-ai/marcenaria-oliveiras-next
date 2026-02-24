export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Import dinâmico do Prisma (evita erro no build)
    const { prisma } = await import("@/lib/db");

    const data = await request.json();
    const { name, email, phone, subject, message } = data ?? {};

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Nome, email e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    // Salvar no banco
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone ?? "",
        subject: subject ?? "",
        message,
        status: "new",
      },
    });

    // Montar HTML do email
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ""}
        ${subject ? `<p><strong>Assunto:</strong> ${subject}</p>` : ""}
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/(\r\n|\n|\r)/g, "<br>")}</p>
        <hr />
        <small>ID da submissão: ${submission.id}</small>
      </div>
    `;

    const appUrl = process.env.NEXTAUTH_URL ?? "";
    const appName = appUrl
      ? new URL(appUrl).hostname.split(".")[0]
      : "Marcenaria";

    // Enviar notificação por email
    try {
      await fetch("https://apps.abacus.ai/api/sendNotificationEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id:
            process.env.NOTIF_ID_FORMULRIO_DE_CONTATO,
          subject: `Nova mensagem de ${name}${
            subject ? ` - ${subject}` : ""
          }`,
          body: htmlBody,
          is_html: true,
          recipient_email:
            "marcenariaoliveiras1825@gmail.com",
          sender_email: appUrl
            ? `noreply@${new URL(appUrl).hostname}`
            : "noreply@abacusai.app",
          sender_alias: `${appName} - Formulário de Contato`,
        }),
      });
    } catch (emailError) {
      console.error("Erro ao enviar email:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro no formulário de contato:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Erro ao processar sua mensagem. Tente novamente.",
      },
      { status: 500 }
    );
  }
}