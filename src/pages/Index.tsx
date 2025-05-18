import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const benefits = [
    {
      icon: "ShieldCheck",
      title: "Гарантия безопасности",
      description: "Все аккаунты проверены и безопасны",
    },
    {
      icon: "Timer",
      title: "Быстрая доставка",
      description: "Получите доступ к аккаунту сразу после оплаты",
    },
    {
      icon: "ThumbsUp",
      title: "Проверенный продавец",
      description: "Высокий рейтинг и множество положительных отзывов",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Всегда готовы ответить на ваши вопросы",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-slate-900 text-white">
      {/* Шапка */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            <Badge
              variant="secondary"
              className="px-4 py-1 text-sm font-medium bg-violet-800 text-white mb-4"
            >
              Лучшие игровые аккаунты
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">
              Игровые аккаунты от{" "}
              <span className="text-violet-400">GGfree77</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Получите премиум аккаунты для ваших любимых игр по выгодным ценам
              от проверенного продавца на FunPay
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-violet-600 hover:bg-violet-700 transition-all hover:translate-y-[-2px]"
              onClick={() =>
                window.open("https://funpay.com/users/7006312/", "_blank")
              }
            >
              <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
              Перейти в магазин
            </Button>
          </div>
        </div>
      </header>

      {/* Преимущества */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat">
            Почему выбирают <span className="text-violet-400">GGfree77</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-violet-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-900/90 to-indigo-900/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Готовы начать игру на новом уровне?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Выбирайте аккаунты от проверенного продавца GGfree77 на FunPay и
            поднимите свой игровой опыт на новый уровень!
          </p>
          <Button
            size="lg"
            className="text-lg px-10 py-7 bg-white text-violet-900 hover:bg-gray-200 transition-all"
            onClick={() =>
              window.open("https://funpay.com/users/7006312/", "_blank")
            }
          >
            <Icon name="ExternalLink" className="mr-2 h-5 w-5" />
            Перейти на FunPay
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 py-10 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-gray-400">
                © 2024 GGfree77 | Игровые аккаунты на FunPay
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() =>
                  window.open("https://funpay.com/users/7006312/", "_blank")
                }
              >
                Мой профиль на FunPay
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
