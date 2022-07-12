<!DOCTYPE html>
<html lang="en">
     <head>
     <title>Search</title>
     <meta charset="utf-8">
     <meta name = "format-detection" content = "telephone=no" />
     <link rel="icon" href="images/favicon.ico">
     <link rel="shortcut icon" href="images/favicon.ico" />
     <link rel="stylesheet" href="css/style.css">
     <script src="js/jquery.js"></script>
     <script src="js/jquery-migrate-1.1.1.js"></script>
     <script src="js/script.js"></script> 
     <script src="js/jquery.horizontalNav.js"></script>
     <script src="js/superfish.js"></script>
     <script src="search/search.js"></script>
     <script src="js/jquery.equalheights.js"></script>
     <script src="js/jquery.mobilemenu.js"></script>
     <script src="js/jquery.easing.1.3.js"></script>

     <script>
         
    $(document).ready(function() { 
$('.full-width').horizontalNav({});
    });

     </script>
     <!--[if lt IE 8]>
       <div style=' clear: both; text-align:center; position: relative;'>
         <a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode">
           <img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." />
         </a>
      </div>
    <![endif]-->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <link rel="stylesheet" media="screen" href="css/ie.css">
      <link rel="stylesheet" media="screen" href="css/ie.css">

    <![endif]-->
     </head>
     <body class="page1">
       
<!--==============================header=================================-->
 <header> <div class="h_top">
  <div class="container_12">
    <div class="grid_12">
    <h1><a href="index.html"><img src="images/logo.png" alt="Rent For Me"></a> </h1>
   <div class="search_block">
               <form id="search" action="search.php" method="GET"  accept-charset="utf-8">
            <input type="text" name="s" />
            <a onclick="document.getElementById('search').submit()"></a>
          </form></div>
    <div class="clear"></div>
         
           <div class="clear"></div>
           
      

      </div></div>
    </div><div class="menu_block"><div>
    <div class="container_12">
      <div class="grid_12">
    
           <nav   class="horizontal-nav full-width horizontalNav-notprocessed" >
            <ul class="sf-menu">
                   <li class="with_ul"><a href="index.html">Home </a><ul>
                         <li><a href="#">Awards</a>
                          <ul>
                            <li><a href="#">Our history</a></li>
                            <li><a href="#">Event Planning</a></li>
                            <li><a href="#">Services</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">About us</a></li>
                     </ul></li>
                   <li><a href="index-1.html">About Us</a></li>
                   <li><a href="index-2.html">Blog</a></li>
                   <li><a href="index-3.html">Menu</a></li>
                   <li><a href="index-4.html">Gallery </a></li>
                   <li class=""><a href="index-5.html">Contact </a></li>
                 </ul>
              </nav>
           <div class="clear"></div>
           </div>
           </div></div>
    </div>
</header>
   
     

<!--=======content================================-->
<div class="content">
  <div class="container_12">
    <div class="grid_12">
         <h2>Search result:</h2>
			   <div id="search-results"></div>
       </div>
</div>
</div>

<!--==============================footer=================================-->

<footer>    
  <div class="container_12">
    <div class="grid_12"><div class="socials">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
      <div class="copy">
      <a href="index.html"><img src="images/footer_logo.png" alt=""></a> &copy; 2013  &nbsp;|&nbsp; <a href="index-6.html">Privacy Policy</a> 
      </div>
      
    </div>
    <div class="clear"></div>
  </div>
</footer>
</body>
</html>