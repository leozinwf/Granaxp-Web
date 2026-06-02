import { FileText } from 'lucide-react';
import Link from 'next/link';

export default function TermosPage() {
  const atualizacao = "02 de Junho de 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <div className="w-16 h-16 bg-roxo-claro/10 rounded-2xl border border-roxo-claro/30 flex items-center justify-center mb-6">
          <FileText size={32} className="text-roxo-claro" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-100 mb-4 tracking-tight">Termos de Uso</h1>
        <p className="text-dark-texto">Última atualização: {atualizacao}</p>
      </div>

      <div className="space-y-8 text-dark-texto leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o aplicativo Grana XP, você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">2. Descrição do Serviço</h2>
          <p>
            O Grana XP é uma plataforma de educação e controle financeiro gamificado. Nosso objetivo é fornecer ferramentas visuais e interativas para ajudar os usuários a organizarem suas finanças pessoais. O Grana XP <strong>não</strong> é um banco, corretora ou instituição financeira, e não realiza transações monetárias reais em nome do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">3. Responsabilidades do Usuário</h2>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Fornecer informações cadastrais precisas e mantê-las atualizadas.</li>
            <li>Proteger as credenciais de acesso à sua conta.</li>
            <li>Garantir que os dados financeiros inseridos manualmente (que são de caráter puramente organizacional) não violem direitos de terceiros.</li>
            <li>Não utilizar a plataforma para fins ilegais, fraudulentos ou não autorizados.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, design, logotipos, ícones (incluindo as insígnias e os mascotes), código-fonte e mecânicas de gamificação presentes no Grana XP são de propriedade exclusiva de seus criadores e são protegidos por leis de direitos autorais e propriedade intelectual.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">5. Limitação de Responsabilidade</h2>
          <p>
            O Grana XP é fornecido "no estado em que se encontra", sem garantias de qualquer tipo. Não nos responsabilizamos por decisões financeiras tomadas pelos usuários com base nas informações inseridas ou exibidas na plataforma. O controle e a responsabilidade pelo patrimônio são inteiramente do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">6. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão notificadas através do e-mail cadastrado ou por meio de um aviso destacado em nosso aplicativo.
          </p>
        </section>

        <hr className="border-dark-borda/60 my-8" />

        <p className="text-sm">
          Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco através da nossa <Link href="/suporte" className="text-roxo-claro hover:underline">Central de Suporte</Link>.
        </p>
      </div>
    </div>
  );
}