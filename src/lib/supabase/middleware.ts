import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // Cria a resposta inicial
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // Atualiza os cookies no pedido
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          
          // Atualiza a resposta
          supabaseResponse = NextResponse.next({
            request,
          })
          
          // Define os cookies na resposta final
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Obtém o utilizador autenticado
  const { data: { user } } = await supabase.auth.getUser()

  // REGRA 1: Se tentar aceder ao /admin sem estar logado, expulsa para o /login
  if (!user && request.nextUrl.pathname.startsWith('/admin')) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // REGRA 2: Se já estiver logado e for para a página de /login, manda diretamente para o /admin
  if (user && request.nextUrl.pathname.startsWith('/login')) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}