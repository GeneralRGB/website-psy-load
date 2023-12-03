import "./about.css";

interface Props {
  language: string;
}

export default function About({ language }: Props) {
  const text: { heading: string; paragraphs: string[] } = {
    heading: "",
    paragraphs: [],
  };
  switch (language) {
    case "en":
      text.heading = "About";
      text.paragraphs = [
        "The group PSY LOAD was formed in 2019. Sergey Senin (G.S.T) and Danila Khorikov (Denny), against the background of accumulated ideas, poems and music, decided to try to play together. It all started in a small provincial town, despite the metropolitan origin of both participants. G.S.T's poetry and Denny's deep thought processes, combined with different musical interests in genres and styles of music, gave rise to the team's own traditions.",
        "The group has never been guided by any style or genre of music, we try to adhere to a free style, but as always happens, we, regardless of our preferences, have formed our own little musical world without boundaries and rules for existence.",
        "The band originates from lyrics written by G.S.T and music composed by both members of the band. The texts contain a deep character and multifaceted perception of our world. We believe in the presence of parallel worlds and do not exclude different developments of events at the same time. We don't sing songs about relationships, but we believe in sincere love, without definitions. We do not remain indifferent to everything that happens in the world and share our perception of the current circumstances in our songs. Psychological loading is a way to reflect on the deep meaning of LIFE in the universe, its forms and parallel worlds in which it is formed by a particle of the Universe.",
        "It was like this for exactly a year, until in 2020, we met Maxim Gunbin, a talented sound engineer, DJ and drummer. His wide range of musicians, interests and talents allowed us to bring new sounds to the compositions and realize some of Denny's crazy ideas. The descriptions for the tracks contain information about the origin of the sound and the ideas behind its birth. Nikolai Simbirtsev, with his solo, decorated the group’s tracks and made an invaluable contribution to their sound, and most importantly, was able to convey the atmosphere of the underlying meaning. Thanks to our artist Badi, we were able to place on the covers of our tracks a visual perception of the stories that we share in our songs. In 2022, we begin working in CSP studio and improving our sound, but later return to SECOND WAVE studio to complete work on the album. In 2023, by the will of the Universe, we begin to work with Alexander VAVEEXPLORER and today we are happy to present a video of our work. We wish everyone peace. Welcome to our world of limitless thoughts.",
      ];
      break;
    case "ru":
      text.heading = "О группе";
      text.paragraphs = [
        "Группа PSY LOAD была образована в 2019 году. Сергей Сенин (G.S.T) и Данила Хориков (Denny) на фоне скопившихся идей, стихов и музыки решили попробовать поиграть вместе. Все началось в небольшом провинциальном городке не смотря на столичное происхождение обоих участников. Поэзия G.S.T и глубокие мыслительные процессы Denny, в совокупности с  разными музыкальными интересами к жанрам и стилям музыки, зародили в команде свои собственные традиции.",
        "Группа никогда не держала ориентиры на какой то стиль или жанр музыки, мы стараемся придерживаться свободного стиля, но как и всегда это бывает, мы независимо от своих предпочтений образовали свой маленький музыкальный мир без границ и правил на существование.",
        "Группа берет свое начало из текстов песен написанных G.S.T и музыкой написанной обоими участниками группы. В текстах заложен глубокий характер и многогранное восприятие нашего мира. Мы верим в присутствие параллельных миров и не исключаем разное развитие событий в одно и тоже время. Мы не исполняем песен об отношениях, но мы верим в искреннюю любовь, без определений. Мы не остаемся безразличными ко всему что, происходит в мире и делимся своим восприятием сложившихся обстоятельств в своих песнях. Психологическая загрузка - это способ поразмышлять над глубоким смыслом ЖИЗНИ во вселенной, ее формах и параллельных мирах в которых она образована частичкой Вселенной.",
        "Так было ровно год, пока в 2020 году, мы не встретили Максима Гунбина, талантливого звукоинженера, диджея и ударника. Его широкий круг музыкантов, интересов и его талантов, позволил нам внести в композиции новое звучание и реализовать ряд сумасшедших идей Denny. В описании к трекам есть информация о происхождении звучания и идеи его рождения. Николай Симбирцев, своим соло украсил треки группы и внес бесценный вклад в их звучание, а главное смог передать атмосферу заложенного смысла. Благодаря нашему художнику - Бади, мы смогли разместить на обложках наших треков, визуальное восприятие тех историй которыми, мы делимся в своих песнях. В 2022 году, мы начинаем работать в CSP studio и совершенствуем свое звучание, но позднее возвращаемся в SECOND WAVE studio для завершения работы над альбом. В 2023 году, волей Вселенной мы начинаем работать с Александром VAVEEXPLORER и сегодня мы счастливы представить видео нашей работы. Мы желаем всем мира. Добро пожаловать в наш мир безграничных размышлений.",
      ];
      break;
    case "sp":
      text.heading = "Sobre";
      text.paragraphs = [
        "El grupo PSY LOAD se formó en 2019. Sergey Senin (G.S.T) y Danila Khorikov (Denny), en el contexto de ideas, poemas y música acumulados, decidieron intentar tocar juntos. Todo empezó en una pequeña ciudad de provincias, a pesar del origen metropolitano de ambos participantes. La poesía de G.S.T y los profundos procesos de pensamiento de Denny, combinados con diferentes intereses musicales en géneros y estilos musicales, dieron origen a las propias tradiciones del equipo.",
        "El grupo nunca se ha guiado por ningún estilo o género musical, intentamos apegarnos a un estilo libre, pero como siempre sucede, nosotros, independientemente de nuestras preferencias, hemos formado nuestro propio pequeño mundo musical sin fronteras ni reglas de existencia.",
        "La banda se origina a partir de letras escritas por G.S.T y música compuesta por ambos miembros de la banda. Los textos contienen un carácter profundo y una percepción multifacética de nuestro mundo. Creemos en la presencia de mundos paralelos y no excluimos diferentes desarrollos de eventos al mismo tiempo. No cantamos canciones sobre relaciones, pero creemos en el amor sincero, sin definiciones. No permanecemos indiferentes a todo lo que sucede en el mundo y compartimos nuestra percepción de las circunstancias actuales en nuestras canciones. La carga psicológica es una forma de reflexionar sobre el significado profundo de la VIDA en el universo, sus formas y mundos paralelos en los que está formada por una partícula del Universo.",
        "Fue así durante exactamente un año, hasta que en 2020 conocimos a Maxim Gunbin, un talentoso ingeniero de sonido, DJ y baterista. Su amplia gama de músicos, intereses y talentos nos permitió aportar nuevos sonidos a las composiciones y hacer realidad algunas de las locas ideas de Denny. Las descripciones de las pistas contienen información sobre el origen del sonido y las ideas detrás de su nacimiento. Nikolai Simbirtsev con su solo decoró las pistas del grupo e hizo una contribución invaluable a su sonido y, lo más importante, fue capaz de transmitir la atmósfera del significado subyacente. Gracias a nuestro artista Badi, pudimos colocar en las portadas de nuestros temas una percepción visual de las historias que compartimos en nuestras canciones. En 2022, comenzamos a trabajar en el estudio CSP y a mejorar nuestro sonido, pero luego regresamos al estudio SECOND WAVE para completar el trabajo en el álbum. En 2023, por voluntad del Universo, comenzamos a trabajar con Alexander VAVEEXPLORER y hoy estamos felices de presentarles un video de nuestro trabajo. Deseamos a todos paz. Bienvenido a nuestro mundo de pensamientos ilimitados.",
      ];
  }
  return (
    <div className="about-section" id="about">
      <h3>{text.heading}</h3>
      {text.paragraphs.map((text, i) => (
        <p key={"about-text-" + i}>{text}</p>
      ))}
    </div>
  );
}
