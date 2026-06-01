import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Interceta todas as rotas do site, EXCEPTO as seguintes:
     * - ficheiros estáticos e otimização do Next.js (_next/static, _next/image)
     * - ícones (favicon.ico, etc.)
     * - ficheiros de imagem estáticos (.svg, .png, .jpg)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}