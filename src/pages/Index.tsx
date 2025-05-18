
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [hoverGame, setHoverGame] = useState<string | null>(null);

  const games = [
    {
      id: "valorant",
      name: "Valorant",
      image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?q=80&w=1170&auto=format&fit=crop",
      price: "от 1200₽",
      badges: ["Топ рейтинг", "Редкие скины"]
    },
    {
      id: "csgo",
      name: "CS:GO",
      image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1186&auto=format&fit=crop",
      price: "от 800₽",
      badges: ["Инвентарь", "Высокий доверительный фактор"]
    },
    {
      id: "genshin",
      name: "Genshin Impact",
      image: "https://images.unsplash.com/photo-1616445784248-81133f92fc26?q=80&w=1170&auto=format&fit=crop",
      price: "от 1500₽",
      badges: ["Редкие персонажи", "Топ оружие"]
    },
    {
      id: "fortnite",
      name: "Fortnite",
      image: "https://images.unsplash.com/photo-1589241062272-c0a000072162?q=80&w=1074&auto=format&fit=crop",
      price: "от 900₽",
      badges: ["Редкие скины", "Battle Pass"]
    }
  ];

  const reviews = [
    {
      author: "Алексей",
      rating: 5,
      content: "Очень доволен покупкой аккаунта Valorant. Всё как описано, быстро и без проблем!"
    },
    {
      author: "Мария",
      rating: 5,
      content: "Купила аккаунт Genshin Impact с кучей персонажей. Сервис на высоте, рекомендую!"
    },
    {
      author: "Дмитрий",
      rating: 4,
      content: "Хороший продавец, быстро отвечает. Аккаунт CS:GO полностью соответствует описанию."
    }
  ];

  const benefits = [
    {
      icon: "ShieldCheck",
      title: "Гарантия безопасности",
      description: "Все аккаунты проверены и безопасны"
    },
    {
      icon: "Timer",
      title: "Быстрая доставка",
      description: "Получите доступ к аккаунту сразу после оплаты"
    },
    {
      icon: "ThumbsUp",
      title: "Проверенный продавец",
      description: "Высокий рейтинг и множество положительных отзывов"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Всегда готовы ответить на ваши вопросы"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-slate-900 text-white">
      {/* Шапка */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="px-4 py-1 text-sm font-medium bg-violet-800 text-white mb-4">
              Лучшие игровые аккаунты
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">
              Игровые аккаунты от <span className="text-violet-400">GGfree77</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Получите премиум аккаунты для ваших любимых игр по выгодным ценам от проверенного продавца на FunPay
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-violet-600 hover:bg-violet-700 transition-all hover:translate-y-[-2px]"
              onClick={() => window.open("https://funpay.com/users/7006312/", "_blank")}
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
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-violet-500/50 transition-all">
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

      {/* Популярные аккаунты */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat">
            Популярные аккаунты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <Card 
                key={game.id}
                className="bg-slate-800/80 border-slate-700/50 overflow-hidden hover:scale-105 transition-all duration-300 group"
                onMouseEnter={() => setHoverGame(game.id)}
                onMouseLeave={() => setHoverGame(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${game.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold mb-1">{game.name}</h3>
                    <p className="text-violet-400 font-semibold">{game.price}</p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {game.badges.map((badge, index) => (
                      <Badge key={index} className="bg-violet-700/70">{badge}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              className="border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white transition-all"
              onClick={() => window.open("https://funpay.com/users/7006312/", "_blank")}
            >
              Смотреть все аккаунты
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-montserrat">
            Что говорят клиенты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{review.content}"</p>
                  <p className="text-sm text-violet-400 font-medium">— {review.author}</p>
                </CardContent>
              </Card>
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
            Выбирайте аккаунты от проверенного продавца GGfree77 на FunPay и поднимите свой игровой опыт на новый уровень!
          </p>
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 bg-white text-violet-900 hover:bg-gray-200 transition-all"
            onClick={() => window.open("https://funpay.com/users/7006312/", "_blank")}
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
                onClick={() => window.open("https://funpay.com/users/7006312/", "_blank")}
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
