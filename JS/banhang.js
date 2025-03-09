const header_login = document.querySelector(".header-line2__login");
const trangdn = document.querySelector(".trangdangnhap");
const tatdn = document.querySelector(".x");
const html = document.documentElement;
header_login.addEventListener("click", () => {
  trangdn.classList.add("active");
  html.style.overflow = "hidden";
});
tatdn.addEventListener("click", () => {
  trangdn.classList.remove("active");
  html.style.overflow = "visible";
});
const tranggiohang = document.querySelector(".giohang");
const giohang = document.querySelector(".fa-cart-plus");
const nuttatgiohang = document.querySelector(".fa-rectangle-xmark");
giohang.addEventListener("click", () => {
  tranggiohang.classList.add("active");
  html.style.overflow = "hidden";
});
nuttatgiohang.addEventListener("click", () => {
  tranggiohang.classList.remove("active");
  html.style.overflow = "visible";
});
function convertToNumber(str) {
  return Number(str.replace(/\./g, ""));
}
function ReverseconvertToNumber(str) {
  return Number(str.replace("", /\./g));
}
const themsanpham = document.querySelectorAll(".sandeal-box-buy");
const sanphamall = document.querySelector(".sanpham-all");
const xoasp = document.querySelector(".xoasp");
const quaylai = document.querySelector(".thongbao-quaylai");
const tieptuc = document.querySelector(".thongbao-tieptuc");
const tamtinh = document.querySelector(".giohang-tongtien__tamtinh-thanhtien");
const giamgiatong = document.querySelector(".giamgiatong");
const tongthanhtien = document.querySelector(
  ".giohang-tongtien__tongtien-thanhtien"
);
const hienthiso = document.querySelector(".hienthiso");

const tatmuahang = document.querySelector(".fa-circle-xmark");
const trumuahang = document.querySelector(".trumuahang");
const congmuahang = document.querySelector(".congmuahang");
const soluongmuahang = document.querySelector(".soluongmuahang");
const themvaogio = document.querySelector(".themvaogio");
const muahang = document.querySelector(".muahang");

trumuahang.addEventListener("click", () => {
  if (soluongmuahang.textContent > 1) {
    soluongmuahang.textContent = Number(soluongmuahang.textContent) - 1;
  }
});
congmuahang.addEventListener("click", () => {
  soluongmuahang.textContent = Number(soluongmuahang.textContent) + 1;
});
tatmuahang.addEventListener("click", () => {
  muahang.classList.remove("active");
  html.style.overflow = "scroll";
  soluongmuahang.textContent = "1";
});
const khungmuahang = document.querySelector(".muahang-container");

themsanpham.forEach((i) => {
  i.addEventListener("click", (e) => {
    muahang.classList.add("active");
    html.style.overflow = "hidden";
    let buyboxtmp = e.target.closest(".buy-box");
    khungmuahang.children[0].src = buyboxtmp.querySelector("img").src;
    khungmuahang.children[1].children[1].textContent = buyboxtmp.querySelector(
      ".sandeal-box-tieude"
    ).textContent;
    khungmuahang.children[1].children[2].innerHTML = buyboxtmp.querySelector(
      ".sandeal-box-giamgia"
    ).innerHTML;
    khungmuahang.children[1].children[3].textContent =
      buyboxtmp.querySelector(".sandeal-box-gia").textContent;
  });
});
const datthanhcong = document.querySelector(".datthanhcong");
themvaogio.addEventListener("click", (e) => {
  let sanpham_all_box = document.createElement("div");
  sanpham_all_box.classList.add("sanpham-all-box");
  let gachchanto = document.createElement("div");
  gachchanto.classList.add("gachchan-to");
  let sanphamthem = document.createElement("div");
  sanphamthem.classList.add("box-sanphamthem");
  let img_giohang = document.createElement("img");
  img_giohang.classList.add("box-sanphamthem-img");
  let spthemmota = document.createElement("div");
  spthemmota.classList.add("box-sanphamthem-mota");
  let dongia = document.createElement("div");
  dongia.classList.add("dongia");
  let soluong = document.createElement("div");
  let minus = document.createElement("i");
  let plus = document.createElement("i");
  let thanhtiendiv = document.createElement("div");
  let giamgiadiv = document.createElement("div");
  minus.classList.add("fa-solid", "fa-minus");
  let spansoluong = document.createElement("div");
  minus.addEventListener("click", () => {
    if (minus.nextElementSibling.textContent !== "1") {
      minus.nextElementSibling.textContent =
        Number(minus.nextElementSibling.textContent) - 1;
      let div = document.createElement("div");
      let dongiatmp = dongia.querySelector(".dg");
      div.textContent =
        (
          convertToNumber(thanhtien.textContent.slice(0, -2)) -
          convertToNumber(dongiatmp.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      thanhtiendiv.textContent = div.textContent;
      thanhtien.textContent = "";
      thanhtien.append(div, trash);
      tamtinh.textContent =
        (
          convertToNumber(tamtinh.textContent.slice(0, -2)) -
          convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
        ).toLocaleString("vi-VN") + " ₫";
      tongthanhtien.textContent =
        (
          convertToNumber(tongthanhtien.textContent.slice(0, -2)) -
          convertToNumber(donggiadiv.textContent.slice(0, -2))
        ).toLocaleString("vi-VN") + " ₫";
      giamgiatong.textContent =
        (
          convertToNumber(giamgiatong.textContent.slice(0, -2)) -
          (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
            convertToNumber(
              dongia.querySelector(".dg").textContent.slice(0, -2)
            ))
        ).toLocaleString("vi-VN") + " ₫";
    }
  });
  plus.classList.add("fa-solid", "fa-plus");
  plus.addEventListener("click", () => {
    plus.previousElementSibling.textContent =
      Number(plus.previousElementSibling.textContent) + 1;
    let div = document.createElement("div");
    let dongiatmp = dongia.querySelector(".dg");
    div.textContent =
      (
        convertToNumber(thanhtien.textContent.slice(0, -2)) +
        convertToNumber(dongiatmp.textContent.slice(0, -2))
      ).toLocaleString("vi-VN") + " ₫";
    thanhtiendiv.textContent = div.textContent;
    thanhtien.textContent = "";
    thanhtien.append(div, trash);
    tamtinh.textContent =
      (
        convertToNumber(tamtinh.textContent.slice(0, -2)) +
        convertToNumber(giamgiadiv.innerHTML.slice(3, -6))
      ).toLocaleString("vi-VN") + " ₫";
    tongthanhtien.textContent =
      (
        convertToNumber(tongthanhtien.textContent.slice(0, -2)) +
        convertToNumber(donggiadiv.textContent.slice(0, -2))
      ).toLocaleString("vi-VN") + " ₫";
    giamgiatong.textContent =
      (
        convertToNumber(giamgiatong.textContent.slice(0, -2)) +
        (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
          convertToNumber(dongia.querySelector(".dg").textContent.slice(0, -2)))
      ).toLocaleString("vi-VN") + " ₫";
  });
  soluong.classList.add("soluong");
  let thanhtien = document.createElement("div");
  thanhtien.classList.add("thanhtien");
  let trash = document.createElement("i");
  trash.classList.add("fa-solid", "fa-trash");
  let muahang = e.target.closest(".muahang");
  img_giohang.src = muahang.querySelector("img").src;
  spthemmota.innerHTML = muahang.querySelector(".muahang-tieude").innerHTML;
  giamgiadiv.innerHTML = muahang.querySelector(".muahang-giamgia").innerHTML;
  let donggiadiv = document.createElement("div");
  donggiadiv.classList.add("dg");
  donggiadiv.innerHTML = muahang.querySelector(".muahang-gia").innerHTML;

  console.log(giamgiadiv.innerHTML.slice(3, -6));
  tongthanhtien.textContent =
    (
      convertToNumber(tongthanhtien.textContent.slice(0, -2)) +
      convertToNumber(donggiadiv.textContent.slice(0, -6)) *
        Number(soluongmuahang.textContent)
    ).toLocaleString("vi-VN") + " ₫";
  tamtinh.textContent =
    (
      convertToNumber(tamtinh.textContent.slice(0, -2)) +
      convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) *
        Number(soluongmuahang.textContent)
    ).toLocaleString("vi-VN") + " ₫";
  donggiadiv.innerHTML = donggiadiv.textContent.slice(0, -6) + " ₫";
  dongia.append(giamgiadiv, donggiadiv);
  giamgiatong.textContent =
    (
      convertToNumber(giamgiatong.textContent.slice(0, -2)) +
      (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
        convertToNumber(dongia.querySelector(".dg").textContent.slice(0, -2))) *
        Number(soluongmuahang.textContent)
    ).toLocaleString("vi-VN") + " ₫";
  thanhtiendiv.innerHTML =
    (
      convertToNumber(
        muahang.querySelector(".muahang-gia").textContent.slice(0, -6)
      ) * Number(soluongmuahang.textContent)
    ).toLocaleString("vi-VN") + " ₫";
  spansoluong.textContent = soluongmuahang.textContent;
  trash.addEventListener("click", (e) => {
    xoasp.classList.add("active");
    tieptuc.addEventListener(
      "click",
      () => {
        let soluongso = soluong.querySelector("div").textContent;
        console.log(soluongso);
        tongthanhtien.textContent =
          (
            convertToNumber(tongthanhtien.textContent.slice(0, -2)) -
            convertToNumber(thanhtiendiv.textContent.slice(0, -2))
          ).toLocaleString("vi-VN") + " ₫";
        tamtinh.textContent =
          (
            convertToNumber(tamtinh.textContent.slice(0, -2)) -
            convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) * soluongso
          ).toLocaleString("vi-VN") + " ₫";
        giamgiatong.textContent =
          (
            convertToNumber(giamgiatong.textContent.slice(0, -2)) -
            (convertToNumber(giamgiadiv.innerHTML.slice(3, -6)) -
              convertToNumber(
                dongia.querySelector(".dg").textContent.slice(0, -2)
              )) *
              soluongso
          ).toLocaleString("vi-VN") + " ₫";
        e.target.closest(".sanpham-all-box").remove();
        xoasp.classList.remove("active");
        console.log();
        if (hienthiso.children[0].textContent === "1") {
          hienthiso.classList.remove("active");
        } else {
          hienthiso.children[0].textContent =
            Number(hienthiso.children[0].textContent) - 1;
        }
      },
      { once: true }
    );
    quaylai.addEventListener(
      "click",
      () => {
        xoasp.classList.remove("active");
      },
      { once: true }
    );
  });
  thanhtien.append(thanhtiendiv, trash);
  soluong.append(minus, spansoluong, plus);
  sanphamthem.append(img_giohang, spthemmota, dongia, soluong, thanhtien);
  sanpham_all_box.append(gachchanto, sanphamthem);
  sanphamall.append(sanpham_all_box);
  muahang.classList.remove("active");
  html.style.overflow = "scroll";
  soluongmuahang.textContent = "1";
  datthanhcong.classList.add("active");
  setTimeout(() => {
    datthanhcong.classList.remove("active");
  }, 1500);
  if (!hienthiso.classList.contains("active")) {
    hienthiso.classList.add("active");
  } else {
    hienthiso.children[0].textContent =
      Number(hienthiso.children[0].textContent) + 1;
  }
});

const QR = document.querySelector(".QR");
const thongtintaiud = document.querySelector(".thongtintaiud");
QR.addEventListener("mouseover", () => {
  thongtintaiud.classList.add("active");
});
QR.addEventListener("mouseout", () => {
  thongtintaiud.classList.remove("active");
});

const danhmuc_box = document.querySelectorAll(".danhmuc-box");
const boxdanhmuc = document.querySelectorAll(".boxdanhmuc");
danhmuc_box.forEach((box, index) => {
  box.addEventListener("click", () => {
    boxdanhmuc.forEach((tmp) => {
      tmp.classList.remove("active");
    });
    boxdanhmuc[index].classList.add("active");
  });
});

const dmdt_c = document.querySelector(".danhmucdathang-container");
const dmdt = document.querySelector(".danhmucdathang");
dmdt_c.addEventListener("mouseleave", () => {
  dmdt.classList.remove("active");
  mt.style.transform = "rotate(0deg)";
  danhmuc_box.forEach((box) => {
    box.classList.remove("active");
  });
});
const choice = document.querySelector(".choice");
const mt = document.querySelector(".fa-chevron-right");
choice.addEventListener("click", () => {
  if (dmdt.classList.contains("active")) {
    dmdt.classList.remove("active");
    mt.style.transform = "rotate(0deg)";
    danhmuc_box.forEach((box) => {
      box.classList.remove("active");
    });
  } else {
    dmdt.classList.add("active");
    mt.style.transform = "rotate(90deg)";
  }
});
