// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;

rh.consts('DEFAULT_TOPIC', encodeURI("#Topics/00-1.htm".substring(1)));
rh.consts('HOME_FILEPATH', encodeURI("index.html"));
rh.consts('START_FILEPATH', encodeURI('index.html'));
rh.consts('HELP_ID', 'FB6DF11B-7817-41D3-B8A8-211699072B79' || 'preview');
rh.consts('LNG_STOP_WORDS', ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "after", "all", "along", "already", "also", "am", "among", "an", "and", "another", "any", "are", "at", "be", "because", "been", "between", "but", "by", "can", "do", "does", "doesn", "done", "each", "either", "for", "from", "get", "has", "have", "here", "how", "i", "if", "in", "into", "is", "isn", "it", "like", "may", "maybe", "more", "must", "need", "non", "not", "of", "ok", "okay", "on", "or", "other", "rather", "re", "s", "same", "see", "so", "some", "such", "t", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "those", "to", "too", "unless", "use", "used", "using", "ve", "want", "was", "way", "were", "what", "when", "when", "whenever", "where", "whether", "which", "will", "with", "within", "without", "yet", "you", "your"]);
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG_NAME'), "ja");
model.publish(rh.consts('KEY_LNG'), {"SearchResultsPerScreen":"検索結果 / ページ","Reset":"リセット","SyncToc":"目次を同期","HomeButton":"ホーム","WebSearchButton":"WebSearch","GlossaryFilterTerms":"用語を検索","HighlightSearchResults":"検索結果をハイライト","ApplyTip":"適用","Welcome_header":"ヘルプセンターへようこそ","WebSearch":"WebSearch","Show":"表示","ShowAll":"すべて表示","EnableAndSearch":"すべての検索語句を含む結果を表示","Welcome_text":"お問い合わせの内容","Next":">>","PreviousLabel":"前へ","NoScriptErrorMsg":"このページを表示するには、ブラウザーで JavaScript サポートを有効にしてください。","Print":"印刷","Contents":"目次","Search":"検索","Hide":"非表示","Canceled":"キャンセルされました","ShowHide":"表示 / 非表示","Loading":"読み込み中...","EndOfResults":"検索結果の最後です。","favoritesLabel":"お気に入り","Logo":"ロゴ","ContentFilterChanged":"コンテンツフィルターが変更されています、再検索してください","SidebarToggleTip":"展開 / 折りたたむ","Logo/Author":"Powered By","JS_alert_LoadXmlFailed":"エラー : xml ファイルの読み込みに失敗しました。","Searching":"検索中...","SearchTitle":"検索","Copyright":"© Copyright 2017. All rights reserved.","favoritesNameLabel":"名前","Disabled Next":">>","JS_alert_InitDatabaseFailed":"エラー : データベースの初期化に失敗しました。","Cancel":"キャンセル","unsetAsFavorite":"お気に入りから削除","nofavoritesFound":"お気に入りとしてマークしたページがありません。","UnknownError":"不明なエラー","ResultsFoundText":"%2 に %1 個の結果が見つかりました","FilterIntro":"フィルターを選択してください :","Index":"索引","Seperate":"|","SearchPageTitle":"検索結果","TopicsNotFound":"トピックが見つかりません。","setAsFavorites":"お気に入りに追加","setAsFavorite":"お気に入りとして設定","Glossary":"用語集","Filter":"フィルター","SearchButtonTitle":"検索...","NextLabel":"次へ","TableOfContents":"目次","HideAll":"すべて非表示","Disabled Prev":"<<","SearchOptions":"検索オプション","Back":"戻る","Prev":"<<","JS_alert_InvalidExpression_1":"入力した内容は有効な式ではありません。","IndexFilterKewords":"キーワードを検索","IeCompatibilityErrorMsg":"このページは、Internet Explorer 8 以前のバージョンでは表示できません.","NavTip":"メニュー","ToTopTip":"トップへ移動","ShowTopicInContext":"このページの全文を参照するには、ここをクリックしてください","FavoriteBoxTitle":"お気に入り"});

model.publish(rh.consts('KEY_HEADER_DEFAULT_TITLE_COLOR'), "#ffffff");
model.publish(rh.consts('KEY_HEADER_DEFAULT_BACKGROUND_COLOR'), "#025172");
model.publish(rh.consts('KEY_LAYOUT_DEFAULT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");

model.publish(rh.consts('KEY_HEADER_TITLE'), "K-D2Planner 取扱説明書");
model.publish(rh.consts('KEY_HEADER_TITLE_COLOR'), "#ffffff");
model.publish(rh.consts('KEY_HEADER_BACKGROUND_COLOR'), "#00A7AC");
model.publish(rh.consts('KEY_HEADER_LOGO_PATH'), "template/kcm_layoutResponsive_HTML5/logo.png");
model.publish(rh.consts('KEY_LAYOUT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");
model.publish(rh.consts('KEY_HEADER_HTML'), "<div class='topic-header' onClick='rh._.goToFullLayout()'>\
  <div class='logo'>\
    <img src='#{logo}' />\
  </div>\
  <div class='nav'>\
    <div class='title' title='#{title}'>\
      <span>#{title}</span>\
    </div>\
    <div class='gotohome' title='#{tooltip}'>\
      <span>#{label}</span>\
    </div></div>\
  </div>\
<div class='topic-header-shadow'></div>\
");
model.publish(rh.consts('KEY_HEADER_CSS'), ".topic-header { background-color: #{background-color}; color: #{color}; width: calc(100%); height: 3em; position: fixed; left: 0; top: 0; font-family: #{font-family}; display: table; box-sizing: border-box; }\
.topic-header-shadow { height: 3em; width: 100%; }\
.logo { cursor: pointer; padding: 0.2em; text-align: center; display: table-cell; vertical-align: middle; }\
.logo img { width: 1.875em; display: block; }\
.nav { width: 100%; display: table-cell; }\
.title { width: 40%; height: 100%; float: left; line-height: 3em; cursor: pointer; }\
.gotohome { width: 60%; float: left; text-align: right; height: 100%; line-height: 3em; cursor: pointer; }\
.title span, .gotohome span { padding: 0em 1em; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; display: block; }");

})();