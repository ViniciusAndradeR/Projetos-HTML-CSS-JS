const paragrafos = [
    {
        texto: "Nobis, cumque! Distinctio quae explicabo recusandae laboriosam deserunt cupiditate sapiente officiis beatae ducimus ullam sint reprehenderit iste nesciunt cum, iure ut commodi eligendi nobis odio maxime voluptatibus temporibus? Quibusdam distinctio quasi error?"
    },
    {
        texto: "Unde illum officia maiores nemo fuga voluptatem earum aperiam veritatis voluptate culpa ipsa tempora quae laudantium delectus repellat distinctio tenetur labore accusamus quasi, dicta officiis porro expedita omnis? Inventore ullam debitis hic! Laudantium modi nulla necessitatibus delectus quo, obcaecati tenetur id et, exercitationem, corporis minus. Possimus sit, quam facere magnam repellendus illo blanditiis impedit dolor ab."
    },
    {
        texto: "Tenetur rerum perspiciatis quaerat excepturi sit numquam debitis placeat dignissimos blanditiis, ipsum error vitae beatae at consectetur, atque saepe veritatis? Dicta id amet rerum, omnis ipsum voluptatem dolor laboriosam recusandae nam delectus qui."
    },
    {
        texto: "Totam ipsam possimus mollitia maxime quam voluptatem reprehenderit at porro velit nulla amet laborum ducimus pariatur incidunt sequi aperiam aspernatur repellat neque, unde minus ratione optio laudantium distinctio dolorum! Facilis consectetur totam, a labore, necessitatibus deserunt tempore cum nobis dignissimos delectus libero quia, non nesciunt provident pariatur corporis laborum et quis facere?"
    },
    {
        texto: "Pariatur eum laboriosam, veritatis distinctio ratione debitis nostrum eligendi corporis beatae earum ipsa neque. Odio animi exercitationem aspernatur tempore cum hic, quia adipisci esse aliquid, numquam iusto sunt itaque corporis? Veritatis, vero odio quia minima qui eaque, quasi nemo error voluptatem sequi quibusdam suscipit dignissimos beatae aut praesentium!"
    },
    {
        texto: "Voluptate perspiciatis, vitae perferendis cum sint natus eaque porro minus mollitia consequatur pariatur sapiente explicabo reiciendis hic neque sed nostrum est illum ducimus optio doloribus nobis ut reprehenderit. Eum vel corrupti eveniet beatae praesentium impedit laborum ipsam officiis enim, suscipit nam numquam quibusdam nihil ullam deleniti accusamus quis, repellat consequatur. Culpa, cupiditate?"
    },
    {
        texto: "Expedita numquam, veritatis debitis iure illo quas aut quasi. Explicabo sint eveniet eos numquam, sequi nesciunt nobis minus facere rerum quas voluptatem, magnam quae? Atque natus tempora eius officia rerum dolorum sint."
    },
    {
        texto: "Voluptatem, minima unde distinctio assumenda explicabo corrupti aperiam fugiat similique consequuntur at commodi id. Possimus, obcaecati. Explicabo, est? Error eaque dolorem cupiditate commodi, sunt veritatis? Ipsam repellendus ullam vero excepturi quis illo"
    },
    {
        texto: "Non quasi quam corrupti culpa alias itaque dolores quisquam nulla, animi commodi fugiat ea a, dolore asperiores, saepe voluptates magni? Possimus odio at quis magnam esse consectetur nostrum consequatur libero quia, optio officiis et neque, doloribus eligendi numquam error corporis hic eos molestiae eaque fugit. Totam dolores adipisci autem modi culpa dolore, assumenda dignissimos distinctio voluptates eius est eum alias natus maxime?"
    },
    {
        texto: "Saepe a consectetur velit, dolor ex commodi, itaque aspernatur voluptatum deserunt eveniet quae recusandae nobis ipsum sed, distinctio accusamus dignissimos repudiandae temporibus fugit enim molestiae ad aperiam! Distinctio unde blanditiis laborum repellat corporis quasi vitae enim aliquid hic non laudantium, quod eaque praesentium!"
    },
    {
        texto: "Voluptatum natus delectus aperiam sint vel maxime dolor eligendi ipsum dolorum veniam itaque deleniti, sed ad totam doloremque quidem magnam, eum architecto fuga iure similique sapiente. Quas maxime eos officia omnis, doloribus, expedita quia deserunt tenetur a minus harum. Doloribus quod harum veniam reiciendis."
    },
    {
        texto: "Repellendus, pariatur qui sapiente laborum consectetur nemo eos nulla quis recusandae eius exercitationem vel debitis. Assumenda sint sapiente sed saepe aut eveniet. Inventore, ullam temporibus! Magnam molestias inventore quod maiores laboriosam esse aperiam necessitatibus quaerat quam."
    },
];

const divParagrafos = document.querySelector('.paragrafos');

function gerarParagrafos() {
    divParagrafos.innerHTML = '';
    const qtdParagrafos = document.getElementById('qtd-paragrafos').value;
    for(let i = 0; i < qtdParagrafos; i++) {
        let p = document.createElement("p");
        let paragrafoAleatorio = Math.floor(Math.random() * paragrafos.length);
        p.innerHTML = paragrafos[paragrafoAleatorio].texto;
        divParagrafos.append(p);
    }
}