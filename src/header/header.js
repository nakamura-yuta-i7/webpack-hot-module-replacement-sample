require("./header.css");

export class Header {
  static getContent() {
    return $(`
      <header>
        <a href="/">
          <i class="material-icons">adb</i>
          <span>${METADATA.TITLE} 6</span>
        </a>
        <nav>
          <ul>
            <li><a href="/">ホーム</a></li>
            <li><a href="/users">ユーザー</a></li>
          </ul>
        </nav>
      </header>
    `)
  }
  static ajaxLogin() {
    var xhr = $.ajax({
      method: "get",
      url: "/api/login.json",
    }).then(function(data) {
      $("#res").val( data.token );
      alert(data.message);
    })
  }
}
