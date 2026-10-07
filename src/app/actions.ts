"use server";

export async function submitCtaForm(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const city = formData.get("city") as string;
  const capital = formData.get("capital") as string;
  const name = formData.get("name") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const profile = formData.get("profile") as string;
  const prazo = formData.get("prazo") as string;
  const conhecimento = formData.get("conhecimento") as string;

  console.log("New Lead:", { city, capital, profile, prazo, conhecimento, name, whatsapp });

  return { success: true, message: "Cadastro recebido com sucesso!" };
}
