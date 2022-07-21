function getListProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  try {
    promise.then((res) => {
      // console.log(res.data.content);
    //   renderProduct(res.data.content, "tbody-realateProduct");
      renderProduct(res.data.content, "tBody-realateProduct");
    });

    promise.catch((err) => {
      console.log(err.response?.data);
    });
  } catch (error) {
    console.log(error);
  }
}

function renderProduct(arrPd, idBody) {
  let html = "";
  let renderProduct = document.getElementById(idBody)
  for (let i = 0; i < 6; i++) {
    let curentProduct = arrPd[i];
    html += `
      <div class="col-md-4 col-product">
          <div class="item">
              <div class="body-item px-md-4 pb-md-2">
                  <img class="d-block ms-auto me-auto w-50" src="${curentProduct.image}" alt="...">
                  <p class="title-item">${curentProduct.name}</p>
                  <div class="description">${curentProduct.description}</div>
              </div>
              <div class="footer-item d-flex">
                  <button class="btn btn-warning w-50 rounded-0" id="btnBuy">Buy Now</button>
                  <p class="price text-center p-3 w-50">${curentProduct.price}$</p>
              </div>
          </div>
      </div>
      `;
  }

    renderProduct.innerHTML = html;
}

window.onload = function () {
    getListProduct();
};
