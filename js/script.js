(function () {
        const card = document.getElementById('hero-image-card');
        const img = document.getElementById('fernanda-img');

        img.addEventListener('error', () => {
          img.src =
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="%2336342e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%23f5e6a2">Imagem não encontrada</text></svg>';
        });

        function onScroll() {
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visible = Math.max(
            0,
            Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
          );
          const translateY = (1 - visible) * 24;
          card.style.transform = `translateY(${translateY}px)`;
        }
        window.addEventListener('scroll', onScroll);
        onScroll();
      })();

       // JS para animação tipo acordeão nos cards
      document.querySelectorAll('.expand-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const content = btn.parentElement.nextElementSibling;
          if(content.classList.contains('hidden')){
            content.classList.remove('hidden');
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = '0px';
            setTimeout(()=>content.classList.add('hidden'), 300);
          }
        });
      });
        const testimonials = [
        {
          nome: "Ana Clara",
          curso: "Alma Animal",
          depoimento: "O curso Alma Animal me ajudou a entender melhor meus animais no dia a dia. Super didático e aplicável!"
        },
        {
          nome: "João Pedro",
          curso: "CITHA",
          depoimento: "Fazer o curso CITHA foi um divisor de águas na minha carreira. Reconhecimento pelo MEC e conteúdo aprofundado!"
        },
        {
          nome: "Mariana Souza",
          curso: "Alma Animal",
          depoimento: "Mesmo não sendo profissional da área, consegui aplicar os ensinamentos do Alma Animal com meus pets e familiares."
        },
        {
          nome: "Carlos Eduardo",
          curso: "CITHA",
          depoimento: "O CITHA me preparou para atuar profissionalmente com segurança. Conteúdo incrível e professores qualificados."
        }
      ];

      const container = document.getElementById('testimonials');

      testimonials.forEach(t => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300";
        card.innerHTML = `
          <p class="text-gray-800 mb-4">&ldquo;${t.depoimento}&rdquo;</p>
          <h3 class="text-lg font-semibold text-gray-900">${t.nome}</h3>
          <span class="text-sm text-gray-600">${t.curso}</span>
        `;
        container.appendChild(card);
      });

// Animar elementos quando aparecem na tela
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Inicializa animação no carregamento
window.addEventListener('load', () => handleScrollAnimation());