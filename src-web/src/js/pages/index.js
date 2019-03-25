define(['axios'], function(axios) {
    function init() {
        render()
    }

    function render() {
        console.log(111)
        const main = document.querySelector('.main');
        axios.get('/api/list').then(rel => {
            let data = rel.data.data;
            main.innerHTML = data.map((file, index) => {
                return `<dl data-index="${index}">
                            <dd>
                                <div class="dd-header">
                                    <p></p><span>${file.name}</span>
                                </div>
                                <h3>${file.title}</h3>
                                <span class="cont">${file.content}</span>
                                <p class="time">距离结束${file.time}</p>
                            </dd>
                            <dt>
                                <img src="./${file.imgs}" alt="">
                            </dt>
                        </dl>`
            }).join('');
        })

        main.onclick = (e) => {
            let tar = e.target;
            console.log(tar.tarName === 'DL')

        }
    }
    init()
})