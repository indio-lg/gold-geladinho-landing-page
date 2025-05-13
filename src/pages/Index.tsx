import React from 'react';
import { ArrowRight, Check, Star, Gift, MessageSquare, Clock, Users, DollarSign } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import TestimonialCard from '@/components/TestimonialCard';
import BenefitCard from '@/components/BenefitCard';
import FaqItem from '@/components/FaqItem';
const Index = () => {
  return <div className="min-h-screen bg-gradient-dark text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-4 py-1 bg-pink rounded-full text-sm font-semibold inline-block mb-4">MÉTODO EXCLUSIVO</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Geladinho <span className="text-gradient">Gold</span>: De Mãe Para Chef de Bairro
            </h1>
            
            {/* YouTube Video */}
            <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden shadow-lg">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CcTf3ubQCBs" title="Geladinho Gold" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg"></iframe>
            </div>
            
            <p className="text-xl mb-8 text-gray-300">
              Pare de Ser a <span className="line-through text-pink">Tia do Doce</span> que Todo Mundo Pede Desconto...
            </p>
            
            <div className="bg-dark-light p-4 rounded-lg mb-8 border-l-4 border-gold">
              <p className="italic text-gray-300">
                "Antes eu vendia geladinhos por R$3 no bairro. Depois do método, comecei a vender por R$15 e esgoto meu estoque em 2 dias!"
              </p>
              <p className="font-bold mt-2">Renata S.M, São Paulo 28 Anos</p>
            </div>
            
            <CTAButton animated size="lg">
              Quero Vender Geladinhos de R$15
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            
            <div className="mt-4 flex items-center text-sm text-gray-400">
              <span className="mr-2">✓</span>
              <p>Acesso imediato após confirmação de pagamento</p>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -inset-0.5 bg-gradient-gold rounded-2xl blur opacity-50"></div>
            <img src="/public/lovable-uploads/567a2f91-61fe-4cdc-8339-f9243702d099.png" alt="Geladinho Gold" className="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Promise with FOMO Section */}
      <section className="py-16 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Em apenas 7 dias você vai...</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-dark p-6 rounded-xl border border-gray-800 text-center hover:border-gold/50 transition-all duration-300">
              <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <DollarSign className="text-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Aumentar Seu Lucro</h3>
              <p className="text-gray-300">Sair de R$3 para R$15 por geladinho com pequenas mudanças.</p>
            </div>
            
            <div className="bg-dark p-6 rounded-xl border border-gray-800 text-center hover:border-gold/50 transition-all duration-300">
              <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <MessageSquare className="text-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Criar Sabores Virais</h3>
              <p className="text-gray-300">Receitas que fazem clientes voltarem e indicarem para amigos.</p>
            </div>
            
            <div className="bg-dark p-6 rounded-xl border border-gray-800 text-center hover:border-gold/50 transition-all duration-300">
              <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Users className="text-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fidelizar Clientes</h3>
              <p className="text-gray-300">Conquistar uma base fiel de clientes que não pedem desconto.</p>
            </div>
            
            <div className="bg-dark p-6 rounded-xl border border-gray-800 text-center hover:border-gold/50 transition-all duration-300">
              <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Clock className="text-dark w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Otimizar Seu Tempo</h3>
              <p className="text-gray-300">Produzir mais em menos tempo com nosso método eficiente.</p>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center bg-dark p-8 rounded-xl border border-gold">
            <div className="mr-0 md:mr-8 mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <Star className="text-gold fill-gold w-8 h-8 mr-2" />
                <Star className="text-gold fill-gold w-8 h-8 mr-2" />
                <Star className="text-gold fill-gold w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mt-2">Garantia 200% Gold</h3>
              <p className="text-gray-300 mt-2">Se não vender pelo menos UM geladinho de R$15 em 30 dias, devolvo o dobro do seu investimento + kit de açaí.</p>
            </div>
            <img src="https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg" alt="Garantia Gold" className="w-32 h-32 object-cover rounded-full border-4 border-gold" />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Benefícios do Método Geladinho Gold</h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">Descubra como transformar geladinhos comuns em produtos premium com alto valor agregado.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitCard icon={Clock} title="Venda enquanto assiste TV" description="Nosso método permite preparar geladinhos em lote para a semana toda. Organize seu tempo e tenha liberdade." />
          
          <BenefitCard icon={MessageSquare} title="Sabores que arrombam o Zap" description="Receitas exclusivas que farão seus clientes implorarem por mais e compartilharem com todos os amigos." />
          
          <BenefitCard icon={DollarSign} title="Preço premium com nome + foto" description="Aprenda a técnica de branding que transforma um simples geladinho em experiência gourmet que justifica R$15." />
          
          <BenefitCard icon={Users} title="Respostas prontas para pedintes" description="Scripts testados para calar educadamente quem pede desconto e ainda fazer comprar mais." />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">O Que Dizem Nossas Alunas</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard name="Márcia L." image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" content="Antes eu vendia só no meu bairro. Agora tenho clientes de 3 bairros diferentes que vêm até minha casa buscar os geladinhos gold! 🤩🍧" highlighted />
            
            <TestimonialCard name="Paula R." image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" content="Comprei o curso na segunda e na sexta já tinha vendido 20 geladinhos a R$15. Minha filha nem acreditou! Melhor investimento! 😍💰" />
            
            <TestimonialCard name="Joana F." image="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" content="As dicas de embalagem são TUDO! Meus geladinhos agora parecem de confeitaria chique. Nunca mais vendi por menos de R$12! 🥇✨" />
          </div>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-dark rounded-xl overflow-hidden">
              <img src="/public/lovable-uploads/0f10b1de-59b5-4891-bca0-1057705d5a46.png" alt="Geladinhos Gold Premium" className="w-full h-auto object-cover" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start bg-dark p-4 rounded-lg">
                <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p>"Estou fazendo R$1.700 por semana só com geladinho gold e trabalho menos que antes!"</p>
              </div>
              
              <div className="flex items-start bg-dark p-4 rounded-lg">
                <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p>"Já tenho lista de espera para meus geladinhos. As pessoas IMPLORAM no WhatsApp!"</p>
              </div>
              
              <div className="flex items-start bg-dark p-4 rounded-lg">
                <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p>"Minha renda aumentou tanto que agora meu marido quer aprender a fazer geladinhos também 😂"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bonuses Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Bônus Exclusivos</h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">Ao adquirir o Método Geladinho Gold hoje, você também recebe:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-light p-6 rounded-xl border border-gold">
            <div className="flex items-center mb-4">
              <Gift className="text-gold w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold">Kit Fotos Gourmet de Pobre</h3>
            </div>
            <p className="text-gray-300 mb-4">20 templates de fotos profissionais para você fazer com celular mesmo. Seus produtos vão parecer de revista gourmet!</p>
            <div className="bg-dark text-gold font-semibold py-2 px-4 rounded inline-block">
              VALOR: <span className="line-through">R$ 97,00</span> (GRÁTIS)
            </div>
          </div>
          
          <div className="bg-dark-light p-6 rounded-xl border border-gold">
            <div className="flex items-center mb-4">
              <MessageSquare className="text-gold w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold">Segredo &quot;R$15 num geladinho?!&quot;</h3>
            </div>
            <p className="text-gray-300 mb-4">Respostas prontas para quando questionarem seu preço. Transforme incrédulos em clientes fiéis!</p>
            <div className="bg-dark text-gold font-semibold py-2 px-4 rounded inline-block">
              VALOR: <span className="line-through">R$ 67,00</span> (GRÁTIS)
            </div>
          </div>
          
          <div className="bg-dark-light p-6 rounded-xl border border-gold">
            <div className="flex items-center mb-4">
              <Clock className="text-gold w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold">Cronograma 2h/dia</h3>
            </div>
            <p className="text-gray-300 mb-4">Organize sua produção para trabalhar apenas 2 horas por dia e ter geladinhos para a semana toda.</p>
            <div className="bg-dark text-gold font-semibold py-2 px-4 rounded inline-block">
              VALOR: <span className="line-through">R$ 77,00</span> (GRÁTIS)
            </div>
          </div>
          
          <div className="bg-dark-light p-6 rounded-xl border border-gold">
            <div className="flex items-center mb-4">
              <Star className="text-gold w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold">Lista de Sabores Premium</h3>
            </div>
            <p className="text-gray-300 mb-4">30 receitas exclusivas que fazem clientes voltarem sempre. Combinações que justificam o preço premium.</p>
            <div className="bg-dark text-gold font-semibold py-2 px-4 rounded inline-block">
              VALOR: <span className="line-through">R$ 127,00</span> (GRÁTIS)
            </div>
          </div>
        </div>
      </section>
      
      {/* Secret Section */}
      <section className="py-16 bg-gradient-to-b from-dark to-dark-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              O Segredo: <span className="text-gradient">Fórmula do Geladinho Viciante</span>
            </h2>
            <p className="text-gray-300 mb-8">
              O método exclusivo que transforma um simples saquinho de R$3 em uma experiência gourmet que as pessoas pagam felizes R$15.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div className="grid grid-cols-2 gap-4">
              <img src="/public/lovable-uploads/420dc73b-5284-41b7-b9f6-70adfe111dcf.png" alt="Geladinho Choco+mmgo Premium" className="rounded-xl shadow-xl w-full h-auto" />
              <img src="/public/lovable-uploads/7bd9d4cf-9a22-4148-b226-0a0ba64e8e8a.png" alt="Geladinho Maracuja e Uva Premium" className="rounded-xl shadow-xl w-full h-auto" />
            </div>
            
            <div>
              <div className="bg-dark-light p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-2 text-pink">Geladinho Comum</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Saquinho plástico comum</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Sabores básicos que todos vendem</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Sem marca ou identidade</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Preço máximo: R$3,00</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-gold p-0.5 rounded-xl">
                <div className="bg-dark-light p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-gold">Geladinho Gold</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Embalagem premium personalizada</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Combinações exclusivas e irresistíveis</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Identidade visual e nome que valoriza</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Preço premium: R$12,00 a R$15,00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Perguntas Frequentes</h2>
        <div className="h-1 w-20 bg-gold mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          <FaqItem question="Preciso saber cozinhar?" answer="Não! Todas as receitas são simples e passo a passo. Se você sabe misturar ingredientes, já está apta a criar geladinhos premium." />
          
          <FaqItem question="E se ninguém comprar?" answer="Impossível! Nosso método inclui estratégias de venda testadas por centenas de alunas. Além disso, oferecemos garantia de 200%: Se não vender pelo menos UM geladinho de R$15 em 30 dias, devolvemos o dobro do seu investimento." />
          
          <FaqItem question="Dá para começar com pouco investimento?" answer="Com certeza! Você pode começar com R$100 em insumos e equipamentos básicos que já tem em casa. Nossa estratégia é baseada em começar pequeno e reinvestir os lucros." />
          
          <FaqItem question="Sou tímida, isso serve para mim?" answer="Sim! Muitas de nossas alunas são tímidas e vendem exclusivamente por WhatsApp ou Instagram. O método inclui scripts de venda para quem não gosta de falar muito." />
          
          <FaqItem question="Quanto tempo demora para eu começar a lucrar?" answer="Nossas alunas começam a vender já na primeira semana após o curso. Com dedicação de 2h por dia, você pode estar lucrando em menos de 7 dias." />
          
          <FaqItem question="Preciso entregar ou posso vender de casa?" answer="Você pode escolher! O método ensina tanto estratégias para vender de casa (criando escassez) quanto modelos de entrega com margem para lucrar ainda mais." />
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple to-pink">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-block bg-gold/20 px-4 py-2 rounded-full text-gold font-semibold mb-4">
            OFERTA POR TEMPO LIMITADO
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Bônus Exclusivo Para as Primeiras 50 Alunas
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Além de todo o conteúdo e bônus, as 50 primeiras alunas também receberão acesso ao grupo VIP de WhatsApp com suporte direto da criadora do método!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Hoje é o dia de virar a mulher que entrega geladinhos num potinho dourado... e volta pra casa com notas de R$50 no sutiã.
            </h3>
            
            <div className="flex flex-col md:flex-row justify-between items-center bg-dark-light p-4 rounded-lg mb-6">
              <div className="text-left mb-4 md:mb-0">
                <p className="text-gray-300 line-through">De R$997,00</p>
                <p className="text-2xl font-bold">Por apenas R$67,00</p>
                <p className="text-sm text-gray-300">ou 12x de R$5,50</p>
              </div>
              <div className="bg-gold/20 p-3 rounded-lg">
                <p className="text-gold font-bold">80% OFF</p>
              </div>
            </div>
            
            <CTAButton animated size="lg" className="w-full md:w-auto">
              Quero Aprender o Método Geladinho Gold
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            
            <div className="mt-4 flex items-center justify-center text-sm">
              <span className="mr-2">🔒</span>
              <p>Pagamento 100% seguro | Acesso imediato</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <img src="https://placehold.co/200x60/gold/dark?text=Geladinho+Gold" alt="Geladinho Gold Logo" className="h-12 mx-auto mb-6" />
          
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Método Geladinho Gold. Todos os direitos reservados.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gold">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-gold">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-gold">Contato</a>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;