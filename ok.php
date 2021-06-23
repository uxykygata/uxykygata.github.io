<?php

include('set.php');


$name = $_POST['name'];
$phone = $_POST['phone'];

$log .= date("H:i:s") . ' - ' . $_POST['name'] . ' - ' . $_POST['phone'] . "\n";
file_put_contents('./order/order'.date("d.m.Y").'.txt', $log, 8);

// on post data. replace $_POST['name'] and $_POST['phone'] with correct variables
if(!empty($_POST['name']) && !empty($_POST['phone'])) {
    $data = [
        "name" => $_POST['name'], // client name
        "phone" => $_POST['phone'], // client phone
        "ip" => $_SERVER['REMOTE_ADDR'], // client ip address
        "ua" => !empty($_SERVER['HTTP_USER_AGENT'])? $_SERVER['HTTP_USER_AGENT']: 's2s', // client user agent
    ];

    // returns {"result": true} on success. link can receive up to 4 sub ids in query(sub2,sub3,sub4,sub5)
    $res = file_get_contents("https://ep.smartad.digital/api/lead/67/2?sub3=".$_SERVER['SERVER_NAME'].'_ww'."&sub2=139&sub4=4&sub5=5",false, stream_context_create(['http' =>
        [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($data)
        ]
    ]));
    file_put_contents("leads.log", "response: " . $res . "; data: ".json_encode($data)."\n", 8);

    print_r($res);
}

?>

<!DOCTYPE html>
<html dir="ltr" lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link href="https://fonts.gstatic.com/" rel="preconnect" crossorigin="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>ขอบคุณสำหรับการสั่งซื้อ</title>


<!--<base href="https://foresta.ua/">--><base href=".">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="generator" content="Pavilion 2.1.5/BurnEngine 1.1.5/OC 2.1.0.1/PHP 5.6.35-1+ubuntu14.04.1+deb.sury.org+1">

<!--
  <script>   !function(f,b,e,v,n,t,s)   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?   n.callMethod.apply(n,arguments):n.queue.push(arguments)};   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';   n.queue=[];t=b.createElement(e);t.async=!0;   t.src=v;s=b.getElementsByTagName(e)[0];   s.parentNode.insertBefore(t,s)}(window, document,'script',   'https://connect.facebook.net/en_US/fbevents.js');   fbq('init', '<?= $pixel ?>');   fbq('track', 'PageView'); fbq('track', 'Lead'); </script> <noscript><img height="1" width="1" style="display:none"   src="https://www.facebook.com/tr?id=<?= $pixel ?>&ev=PageView&noscript=1" /></noscript>
-->


<img height="1" width="1" style="display:none"   src="https://www.facebook.com/tr?id=<?= $pixel ?>&ev=Lead&noscript=1" />
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136677299-31"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-136677299-31');
  </script>



</head>

<body class="checkout-success tb_width_1200 tb_lang_ltr tb_page_checkout_success header_global_intro_global_content_global_footer_global_area_content_system_checkout_success_area_column_left_global_ru_https_foresta_ua no_touch"><svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="chevron_thin" viewBox="0 0 20 20">
    <path d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908 c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"></path>
  </symbol>
  <symbol id="close" viewBox="0 0 24 24">
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
  </symbol>
  <symbol id="check" viewBox="0 0 24 24">
    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
  </symbol>
</svg>

<div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div></div></div><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div></div></div></div>

<div id="wrapper" class="container-fluid">

<section id="content" class="tb_area_content row-wrap tb_content_fixed tb_mr_50 lazyloaded" data-expand="100">
    <div class="row tb_separate_columns tb_ip_10">

                <div class="main col col-xs-12 col-sm-fill col-md-fill">
      <div class="row_c3m5O row-wrap tb_content_fixed tb_mb_20 tb_ml_15 tb_pt_15 tb_pr_15 tb_pb_20 tb_pl_15 lazyloaded" data-expand="100">
  <div class="row tb_gut_xs_30 tb_gut_sm_30 tb_gut_md_30 tb_gut_lg_30">
        <div class="col_h46ZU col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-valign-top tb_pt_0 tb_pr_0 tb_pb_0 tb_pl_0"><div id="Text_YiW0NjBh" class="tb_wt tb_wt_text display-block"><div class="panel-body tb_text_wrap">
<div class="thankyou-page"><span class="thankyou-page__thanks"></span>
</div>
</div><div id="System_xwpAXpiu" class="tb_wt tb_wt_system display-block tb_system_page_content"><div class="tb_text_wrap tb_sep">
  <div class="thankyou-page">
    <!-- <span class="thankyou-page__thanks">Спасибо!</span>
    <img class="thankyou-page__smile" src="/catalog/view/theme/BurnEngine/image/smile/smile.png" alt=""> -->
    <div class="thankyou-page__text">
      <h1>ขอบคุณสำหรับการสั่งซื้อ</h1>
<p>ทางร้านจะรีบตรวจสอบและดำเนินการโดยเร็วที่สุด</p>
      <h2><?= $phone ?></h2>

         </div>
  </div>


</div>
        </div></div>
      </div>


</div>    </div>


  </div>
</section>


<div class="tbMobileMenuOverlay">  <svg></svg>  <span class="tb_bg"></span></div></div>



<link rel="stylesheet" type="text/css" href="./index_files/styleVova.css">

<link media="screen" type="text/css" href="./index_files/np.css" rel="stylesheet">
</body></html>
