window.addEventListener('load', function () {
  fetch('json/topics.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const main = document.getElementById('main');
      const _place = { Taoyuan: '桃園金萱館', Taichung: '台中小葉館', Pingdong: '屏東四季館' };
      for (const i in _place) {
        const section = document.createElement('section');
        section.classList.add('topic');
        section.classList.add(i);
        // 大標 <h2>桃園金萱館</h2>
        const h2 = document.createElement('h2');
        h2.innerText = _place[i];
        section.append(h2);
        for (const item in data) {
          if (data[item].game_place === _place[i]) {
            // 超連結 <a href="topic_info_page.html" class="eazy">
            const a = document.createElement('a');
            a.classList.add(data[item].game_hard);
            a.href = 'topic_info_page.html';
            // 標籤	<span class="occupational_disease"></span>
            if (data[item].game_tag) {
              const tag = document.createElement('span');
              tag.classList.add(data[item].game_tag);
              a.append(tag);
            }
            // 底圖	<img src="pic/50shoulder.webp" alt="">
            const img = document.createElement('img');
            img.src = `pic/${data[item].game_pic}`;
            a.append(img);
            // 資訊	<div class="info"></div>
            const info = document.createElement('div');
            info.classList.add('info');
            // 難度 <div class="game_hard"></div>
            const hard = document.createElement('div');
            hard.classList.add('game_hard');
            // 難度星星 <img class="icon" src="pic/topic-harder.png" alt="">
            const _hardIcon = document.createElement('img');
            _hardIcon.classList.add('icon');
            _hardIcon.src = 'pic/topic-harder.png';
            hard.append(_hardIcon.cloneNode());
            hard.append(_hardIcon.cloneNode());
            hard.append(_hardIcon.cloneNode());
            hard.append(_hardIcon.cloneNode());
            hard.append(_hardIcon.cloneNode());
            info.append(hard);
            // 名稱 <h3>五十肩</h3>
            const h3 = document.createElement('h3');
            h3.innerText = data[item].game_name;
            info.append(h3);
            // <span class="game_players">
            const players = document.createElement('span');
            players.classList.add('game_players');
            players.innerText = data[item].game_players+" 人";
            // <img class="icon" src="pic/topic-user.png" alt="">3 人
            const playersIcon = document.createElement('img');
            playersIcon.classList.add('icon');
            playersIcon.src = 'pic/topic-user.png';
            players.prepend(playersIcon);
            info.append(players);
            // <span class="game_time">
            const times = document.createElement('span');
            times.classList.add('game_time');
            times.innerText = data[item].game_time+" min";
            // <img class="icon" src="pic/topic-hour_glass.png" alt="">60 min
            const timesIcon = document.createElement('img');
            timesIcon.classList.add('icon');
            timesIcon.src = 'pic/topic-hour_glass.png';
            times.prepend(timesIcon);
            info.append(times);

            a.append(info);
            section.append(a);
          }
        }
        main.append(section);
      }
      console.log(main);
    });
});
