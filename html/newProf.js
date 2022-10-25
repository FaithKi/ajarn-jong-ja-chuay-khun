let professors = [
    { imgPath: "/img/professors/0.jpg", name: "Vishunu ", id: "0" },
    { imgPath: "/img/professors/1.jpg", name: "Proadpran", id: "1" },
    { imgPath: "/img/professors/2.jpg", name: "Nuttapong", id: "2" },
    { imgPath: "/img/professors/3.jpg", name: "Yachai", id: "3" },
    { imgPath: "/img/professors/4.jpg", name: "Wiwat", id: "4" },
    { imgPath: "/img/professors/5.jpg", name: "Twittie", id: "5" },
    { imgPath: "/img/professors/6.jpg", name: "Peerapon", id: "6" },
    { imgPath: "/img/professors/7.jpg", name: "Veera", id: "7" },
    { imgPath: "/img/professors/8.jpg", name: "Sukree", id: "8" },
    { imgPath: "/img/professors/9.jpg", name: "Prabhas", id: "9" },
    { imgPath: "/img/professors/10.jpg", name: "Chate", id: "10" },
    { imgPath: "/img/professors/11.jpg", name: "Nattee", id: "11" },
    { imgPath: "/img/professors/12.jpg", name: "Pizzanu", id: "12" },
    { imgPath: "/img/professors/13.jpg", name: "Boonserm", id: "13" },
    { imgPath: "/img/professors/14.jpg", name: "Jessada", id: "14" },
    { imgPath: "/img/professors/15.jpg", name: "Krerk", id: "15" },
    { imgPath: "/img/professors/16.jpg", name: "Nuengwong", id: "16" },
    { imgPath: "/img/professors/17.jpg", name: "Taratip", id: "17" },
    { imgPath: "/img/professors/18.jpg", name: "Thanarat", id: "18" },
    { imgPath: "/img/professors/19.jpg", name: "Duangdao", id: "19" },
    { imgPath: "/img/professors/20.jpg", name: "Narongdech", id: "20" },
    { imgPath: "/img/professors/21.jpg", name: "Ekapol", id: "21" },
    { imgPath: "/img/professors/22.jpg", name: "Chotirat", id: "22" },
    { imgPath: "/img/professors/23.jpg", name: "Pitchaya", id: "23" },
    { imgPath: "/img/professors/24.jpg", name: "Thongchai", id: "24" },
    { imgPath: "/img/professors/25.jpg", name: "Pittipol", id: "25" },
    { imgPath: "/img/professors/26.jpg", name: "Atiwong", id: "26" },
    { imgPath: "/img/professors/27.jpg", name: "Punnarai", id: "27" },
    { imgPath: "/img/professors/28.jpg", name: "Natawut", id: "28" },
    { imgPath: "/img/professors/29.jpg", name: "Kultida", id: "29" },
    { imgPath: "/img/professors/30.jpg", name: "Setha", id: "30" },
    { imgPath: "/img/professors/31.jpg", name: "Atthawith", id: "31" },
    { imgPath: "/img/professors/32.jpg", name: "Nakornthip", id: "32" },
    { imgPath: "/img/professors/33.jpg", name: "Athasit", id: "33" },
    { imgPath: "/img/professors/34.jpg", name: "Arthit", id: "34" }
]

let app = document.getElementById("app");
for (ajarn of professors) {

    let container = document.createElement('div');
    let picDiv = document.createElement('div');
    let img = document.createElement('img');
    let ajInfo = document.createElement('div');
    let ajName = document.createElement('div');

    img.src = ajarn['imgPath']
    img.alt = ajarn['name']
    container.classList.add("ajarn");
    picDiv.classList.add("pic-cont");
    img.classList.add("aj-pic");
    ajInfo.classList.add("aj-info");
    ajName.classList.add("aj-name");

    ajName.innerText = " PROF. " + ajarn['name']

    picDiv.appendChild(img)
    ajInfo.appendChild(ajName)
    container.appendChild(picDiv)
    container.appendChild(ajInfo)

    container.id = ajarn['id']
    container.addEventListener("click", () => {
        let ajarnId = container.id;
        chrome.storage.sync.set({ professorId: ajarnId });
        console.log(ajarnId)
        alert('Professor selected.')

        chrome.tabs.getCurrent(function (tab) {
            chrome.tabs.remove(tab.id);
        });
    });

    app.appendChild(container);
}