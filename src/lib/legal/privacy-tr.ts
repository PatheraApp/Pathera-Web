import type { LegalDocument } from './types';

export const privacyTr: LegalDocument = {
  intro: [
    'Pathera olarak gizliliğinize önem veriyoruz. Bu Gizlilik Politikası, Pathera mobil uygulaması, web sitesi ve ilgili hizmetleri kullanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını, işlendiğini ve korunduğunu açıklamaktadır.',
    'Pathera’yı kullanarak bu Gizlilik Politikası’nı kabul etmiş sayılırsınız.',
  ],
  sections: [
    {
      title: '1. Kapsam',
      blocks: [
        {
          type: 'p',
          text: 'Bu Gizlilik Politikası aşağıdaki hizmetleri kapsar:',
        },
        {
          type: 'ul',
          items: [
            'Pathera mobil uygulaması',
            'Pathera web sitesi',
            'Yapay zekâ destekli seyahat planlama özellikleri',
            'Sosyal özellikler, etkinlikler ve kullanıcı etkileşimleri',
            'Premium abonelik hizmetleri',
            'Pathera ile bağlantılı tüm dijital hizmetler',
          ],
        },
      ],
    },
    {
      title: '2. Topladığımız Bilgiler',
      blocks: [
        {
          type: 'p',
          text: 'Pathera’yı kullanırken aşağıdaki bilgileri toplayabiliriz:',
        },
      ],
      subsections: [
        {
          title: '2.1 Hesap Bilgileri',
          blocks: [
            {
              type: 'p',
              text: 'Hesap oluşturduğunuzda aşağıdaki bilgiler işlenebilir:',
            },
            {
              type: 'ul',
              items: [
                'Ad, soyad ve kullanıcı adı',
                'E-posta adresi',
                'Profil fotoğrafı ve profil açıklaması',
                'Hesap tercihleri',
                'Kimlik doğrulama verileri (Google, Apple veya e-posta sağlayıcısı üzerinden)',
              ],
            },
          ],
        },
        {
          title: '2.2 Konum Bilgileri',
          blocks: [
            {
              type: 'p',
              text: 'Pathera, yalnızca kullanıcı izni ile konum verilerinizi kullanır.',
            },
            {
              type: 'p',
              text: 'Konum verileri şu amaçlarla işlenebilir:',
            },
            {
              type: 'ul',
              items: [
                'Harita üzerinde konumunuzu göstermek',
                'Yakındaki yerleri, etkinlikleri ve önerileri sunmak',
                'Rota oluşturmak ve seyahat planlarını geliştirmek',
                'Kullanıcılar arası konum tabanlı özellikleri sağlamak',
              ],
            },
            {
              type: 'p',
              text: 'Konum erişimi tamamen kullanıcı kontrolündedir ve cihaz ayarlarından istenildiği zaman kapatılabilir.',
            },
            {
              type: 'p',
              text: 'Uygulama, yalnızca ilgili özelliğin çalışması için gerekli olduğu durumlarda konum verilerine erişir.',
            },
          ],
        },
        {
          title: '2.3 Kullanıcı Tarafından Paylaşılan İçerikler',
          blocks: [
            {
              type: 'p',
              text: 'Platformda paylaştığınız içerikler işlenebilir:',
            },
            {
              type: 'ul',
              items: [
                'Fotoğraflar',
                'Yorumlar',
                'Beğeniler',
                'Seyahat planları',
                'Etkinlik içerikleri',
                'Profil bilgileri',
                'Direkt mesajlar (DM)',
              ],
            },
            {
              type: 'p',
              text: 'Paylaşılan içeriklerin görünürlüğü kullanıcı ayarlarına ve platform özelliklerine bağlıdır.',
            },
          ],
        },
        {
          title: '2.4 Yapay Zekâ Özellikleri',
          blocks: [
            {
              type: 'p',
              text: 'Pathera, seyahat planlama ve öneri sunma amacıyla yapay zekâ tabanlı hizmetler kullanabilir.',
            },
            {
              type: 'p',
              text: 'AI ile etkileşim sırasında gönderilen mesajlar şu amaçlarla işlenebilir:',
            },
            {
              type: 'ul',
              items: [
                'Seyahat planı oluşturmak',
                'Öneri ve bilgi sağlamak',
                'Kullanıcı deneyimini geliştirmek',
              ],
            },
            {
              type: 'p',
              text: 'Bu veriler, teknik olarak gerekli olduğu durumlarda üçüncü taraf yapay zekâ servis sağlayıcıları ile paylaşılabilir ve mümkün olduğu ölçüde kişisel kimlik bilgilerinden ayrıştırılarak işlenir.',
            },
            {
              type: 'p',
              text: 'Yapay zekâ tarafından sunulan bilgiler yalnızca bilgilendirme amaçlıdır ve kesin doğruluk garantisi vermez.',
            },
          ],
        },
        {
          title: '2.5 Premium Abonelik Bilgileri',
          blocks: [
            {
              type: 'p',
              text: 'Premium abonelik süreçlerinde abonelik durumu ve satın alma geçmişi gibi bilgiler işlenebilir.',
            },
            {
              type: 'p',
              text: 'Ödemeler Apple App Store veya Google Play Store üzerinden gerçekleştirilir. Pathera, ödeme kartı bilgilerini saklamaz.',
            },
          ],
        },
        {
          title: '2.6 Teknik Veriler',
          blocks: [
            {
              type: 'p',
              text: 'Uygulama kullanımı sırasında otomatik olarak şu veriler toplanabilir:',
            },
            {
              type: 'ul',
              items: [
                'Cihaz modeli',
                'İşletim sistemi',
                'Uygulama sürümü',
                'Çökme kayıtları (crash logs)',
                'Kullanım istatistikleri',
                'Dil ve bölge tercihleri',
              ],
            },
          ],
        },
      ],
    },
    {
      title: '3. Verilerin Kullanımı',
      blocks: [
        {
          type: 'p',
          text: 'Toplanan veriler şu amaçlarla kullanılır:',
        },
        {
          type: 'ul',
          items: [
            'Hesap oluşturma ve yönetme',
            'Hizmetleri sağlama ve geliştirme',
            'Harita ve konum özelliklerini çalıştırma',
            'Yapay zekâ önerileri sunma',
            'Premium hizmetleri sağlama',
            'Güvenlik ve kötüye kullanımın önlenmesi',
            'Teknik sorunları tespit etme ve çözme',
          ],
        },
      ],
    },
    {
      title: '4. Veri Paylaşımı',
      blocks: [
        {
          type: 'p',
          text: 'Pathera kişisel verilerinizi satmaz.',
        },
        {
          type: 'p',
          text: 'Veriler yalnızca hizmetin sağlanması için sınırlı şekilde paylaşılabilir:',
        },
        {
          type: 'ul',
          items: [
            'Bulut altyapı ve veri depolama sağlayıcıları',
            'Harita ve konum servis sağlayıcıları',
            'Analitik ve performans ölçüm araçları',
            'Yasal zorunluluklar kapsamında resmi makamlar',
          ],
        },
      ],
    },
    {
      title: '5. Kullanıcı Güvenliği ve Sosyal Etkileşimler',
      blocks: [
        {
          type: 'p',
          text: 'Pathera kullanıcıların sosyal etkileşimde bulunmasına, etkinlik oluşturmasına ve diğer kullanıcılarla iletişim kurmasına izin verebilir.',
        },
        {
          type: 'p',
          text: 'Kullanıcılar arasında uygulama üzerinden başlayan iletişimler gerçek hayatta buluşmalara dönüşebilir.',
        },
        {
          type: 'p',
          text: 'Pathera, kullanıcılar arasında gerçekleşen fiziksel buluşmalar, seyahatler, etkileşimler veya bu etkileşimlerden doğabilecek sonuçlardan sorumlu değildir.',
        },
        {
          type: 'p',
          text: 'Kullanıcıların kendi güvenlik değerlendirmelerini yapmaları ve dikkatli olmaları önerilir.',
        },
        {
          type: 'p',
          text: 'Taciz, dolandırıcılık veya kötüye kullanım tespit edilen hesaplar askıya alınabilir veya kalıcı olarak kapatılabilir.',
        },
      ],
    },
    {
      title: '6. Veri Güvenliği',
      blocks: [
        {
          type: 'p',
          text: 'Kişisel veriler modern güvenlik standartları kullanılarak korunur.',
        },
        {
          type: 'p',
          text: 'Ancak internet üzerinden hiçbir veri aktarımı veya depolama yöntemi %100 güvenli değildir.',
        },
      ],
    },
    {
      title: '7. Haklarınız ve Veri Silme',
      blocks: [
        {
          type: 'p',
          text: 'Kullanıcılar istedikleri zaman hesaplarını silebilir veya veri silme talebinde bulunabilir.',
        },
        {
          type: 'p',
          text: 'KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:',
        },
        {
          type: 'ul',
          items: [
            'Verilerinizin işlenip işlenmediğini öğrenme',
            'Düzeltme talep etme',
            'Silme talep etme',
          ],
        },
        {
          type: 'p',
          text: 'Hesap silindiğinde, yasal yükümlülükler veya güvenlik gereklilikleri kapsamında saklanması gereken sınırlı veriler dışında tüm kişisel veriler silinir.',
        },
      ],
    },
    {
      title: '8. Çocukların Gizliliği',
      blocks: [
        {
          type: 'p',
          text: 'Pathera, 13 yaş altındaki kullanıcılar için tasarlanmamıştır.',
        },
        {
          type: 'p',
          text: '13 yaş altındaki bireylerin platformu kullanmasına izin verilmez.',
        },
      ],
    },
    {
      title: '9. Uluslararası Veri İşleme',
      blocks: [
        {
          type: 'p',
          text: 'Hizmetlerimizi kullanmanız halinde verileriniz farklı ülkelerde bulunan güvenli sunucularda işlenebilir ve saklanabilir.',
        },
      ],
    },
    {
      title: '10. Güncellemeler',
      blocks: [
        {
          type: 'p',
          text: 'Bu Gizlilik Politikası zaman zaman güncellenebilir.',
        },
        {
          type: 'p',
          text: 'Önemli değişiklikler uygulama veya web sitesi üzerinden bildirilir.',
        },
      ],
    },
  ],
  contact: {
    title: '11. İletişim',
    lead: 'Sorularınız için bizimle iletişime geçebilirsiniz:',
    email: 'business@pathera.net',
    web: 'pathera.net',
    webUrl: 'https://pathera.net',
  },
};
