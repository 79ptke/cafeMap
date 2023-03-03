import React, { useEffect } from 'react';
import { markerdata } from "./data/markerData";

const { kakao } = window;

const Map=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.558607360280995, 126.92439135047796),
      level: 3
    };

    var map = new kakao.maps.Map(container, options); 


    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(34, 39);

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var customOverlay;  // 오버레이
    var contentStr;      
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const tabLists = document.querySelectorAll('.header ul li');

    tabLists.forEach(function(tabList){
      var marker = [];
      //console.log(tabList);
      tabList.addEventListener('click',function(e){

        // 메뉴 클릭시 다른 마커 지우기
        document.querySelectorAll('#map > div > div > div > div').forEach(function(divs) {
          divs.remove();
          // 지도 줌인 줌 아웃시 다른 말풍선 생기는거 지우기
          document.querySelectorAll('.title').forEach(function(titles){
            titles.remove();
          });
        });

        const onLi = document.querySelector('.on');
        if(onLi && onLi !== e.currentTarget) {
          onLi.classList.remove('on');
        }
        e.currentTarget.classList.toggle('on');
   
        markerdata.forEach((el) => {
          if(document.querySelector('.header ul li.on').textContent === el.txt) {
            // marker.setMap(map);
            // customOverlay.setMap(map);
            marker = new kakao.maps.Marker({
              map: map, // null이면 마커 안나옴
              //map: (document.querySelector('.header ul li.on').textContent === el.txt) ? map : null,
              position: new kakao.maps.LatLng(el.lat, el.lng),
              title: el.txt,
              image: markerImage,
            });

            contentStr = "<div class='title' title='"+el.txt+"' style='padding: 10px; border-radius: 8px; background: #fff;'>"+ el.title +"</div>";
    
            customOverlay = new kakao.maps.CustomOverlay({
                map: map,
                //map: (document.querySelector('.header ul li.on').textContent === el.txt) ? map : null,
                position: new kakao.maps.LatLng(el.lat + 0.0005, el.lng),
                content: contentStr,
                yAnchor: 1 
            });
          } 


        });

      });



      // 지도가 확대 또는 축소되면 해당 말풍선 외 다른 말풍선 지우기
      kakao.maps.event.addListener(map, 'zoom_changed', function() {        

          const titleDivs = document.querySelectorAll('.title');
          for (const titleDiv of titleDivs) {
            if(document.querySelector('.header ul li.on').textContent !== titleDiv.getAttribute('title')) {
              titleDiv.remove();
            } 
          }
          
      });
      // 지도가 클릭시 해당 말풍선 외 다른 말풍선 지우기
      kakao.maps.event.addListener(map, 'click', function() {        
        // resultDiv.innerHTML = message;
        const titleDivs = document.querySelectorAll('.title');
          for (const titleDiv of titleDivs) {
            if(document.querySelector('.header ul li.on').textContent !== titleDiv.getAttribute('title')) {
              titleDiv.remove();
            } 
          }
        
    });
    
    });


    }, [])


    return (
        <div>
        <div id="map" style={{position: "relative", width:"100%", height:"100vh"}}>
          <div className="markerInfo"  style={{display: "none", position: "absolute", top:"50%", left:"20px",transform:"translateY(50%)",width: "200px", padding: "20px",borderRadius: "20px", background:"#fff",zIndex: "9"}}>
            <ul></ul>
          </div>
        </div>
       
        </div>
    )
}

export default Map;