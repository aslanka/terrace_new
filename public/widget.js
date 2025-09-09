// widget.js
(function () {
    const restaurant = document.currentScript.getAttribute("data-restaurant");
  
    fetch(`http://localhost:4000/api/promotions?restaurant=${restaurant}`)
      .then((res) => res.json())
      .then((promo) => {
        if (promo && promo.active) {
          const div = document.createElement("div");
          div.innerHTML = `
            <div style="position:fixed;bottom:20px;right:20px;
                        background:#fff;padding:16px 20px;border-radius:8px;
                        box-shadow:0 2px 6px rgba(0,0,0,0.2);
                        font-family:sans-serif;max-width:250px;z-index:9999;">
              <h3 style="margin:0 0 8px 0;font-size:18px;">${promo.title}</h3>
              <p style="margin:0;font-size:14px;">${promo.description}</p>
            </div>
          `;
          document.body.appendChild(div);
        }
      })
      .catch((err) => console.error("Widget error:", err));
  })();
  