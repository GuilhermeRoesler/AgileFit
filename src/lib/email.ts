/** Validação de e-mail no cliente (a validação definitiva fica no servidor). */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (email.length < 5 || email.length > 254) return false;
  return EMAIL_PATTERN.test(email);
}
