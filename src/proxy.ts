import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

// Mudamos o nome da função de 'middleware' para 'proxy'
export async function proxy(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Intercepta todas as rotas do site, EXCETO as seguintes:
     * - arquivos estáticos e otimização do Next.js (_next/static, _next/image)
     * - ícones (favicon.ico, etc.)
     * - arquivos de imagem estáticos (.svg, .png, .jpg)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}