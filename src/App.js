import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App black">
      <ul>
        <li><a href="//">ABOUT US</a></li>
        <li><a href="//">STORY</a></li>
        <li><a href="//">CHARACHER</a></li>
        <li><a href="//">ORIGINAL STORY</a></li>
      </ul>

{/* ------------------------------------------------------------------------------- */}

      <div class="container black front">
          <div class="col-12"> <h1 className="bighead">THE LITTLE RED <br />RIDING HOOD</h1> </div>
      </div>
{/* ------------------------------------------------------------------------------- */}
        <div>
          <div class="col-5 headh2"><h2>THE ORIGINAL STORY</h2></div>
{/* ------------------------------------------------------------------------------- */}
          <div class="row black">
            <div class="col-6 black text">
            
              <p style = {{ paddingLeft : 20 , paddingRight : 20 , margin : 10 }}>
                <b>"หนูน้อยหมวกแดง"</b><br />
                เป็นเทพนิยายยุโรปเกี่ยวกับเด็กสาวกับหมาป่าเจ้าเล่ห์โดยต้นกำเนิดของนิทานสามารถสืบย้อนไปถึงนิทานพื้นบ้านของยุโรปในช่วงก่อนศตวรรษที่
                17 อยู่หลายเรื่อง โดยทั้ง 2
                เวอร์ชั่นที่รู้จักกันดีที่สุดเขียนขึ้นโดย<b>Chales Perrault และพี่น้องตระกูลกริมส์</b>
              </p>
            </div>

            <div class="col-6 " >
              <img src="/photo/1.png" />
              <h4 class="undertext" >“Little Red Riding Hood”Illustration by J.W. Smith</h4>
            </div>
          
{/* ------------------------------------------------------------------------------- */}
            <div class="col-6 black">
              <img src="/photo/2.png" />
              <h4 class="undertext">“Little Red Riding Hood” Illustration by Arthur Rackham</h4>
            </div>

            <div class="col-6 text">
              <p style = {{ paddingLeft : 20 , paddingRight : 20 , margin : 10 , paddingRight : 50}}>ซึ่งเนื้อเรื่องของ”หนูน้อยหมวกแดง”ได้ถูกเปลี่ยนแปลงและดัดแปลงอยู่ตลอดเวลาโดยมาจากการเล่าซ้ำหลายครั้งและมีการดัดแปลงเนื้อหาเพื่อให้เข้ากับการนิทานที่ให้มีความทันสมัยมากขึ้นตามยุคสมัยนั้นๆซึ่งชื่ออื่นของเรื่องหนูน้อยหมวกแดงได้แก่<br /><b>“Little Red Cap” หรือ “Red Riding Hood”</b></p>
              </div>
            </div>
{/* ------------------------------------------------------------------------------- */}
          <div class="col-5 headh2R">
            <h2>CHARACTERS</h2>
          </div>
{/* ------------------------------------------------------------------------------- */}         
          <div class="row black">
            <div class="col-6 black" style={{paddingTop : 80}}><img src="/photo/2.png" /></div>

            <div class="col-6 textp2">
              <p className="textp1 font" style = {{ paddingLeft : 20, margin : 10,paddingTop : 80 }}>Little Red Riding Hood</p>
              <p style = {{ paddingLeft : 40 , paddingRight : 20 , margin : 10, paddingRight : 50 }}> เด็กสาวหน้าตาน่ารักที่ชอบนั่งเล่นดูคุณแม่ทำอาหารอยู่ในครัวจนเพื่อนบ้านต่างเรียกเธอว่า
                <b>“หนูน้อยหมวกแดง”</b>
                เพราะเป็นสีที่เธอชอบใส่อยู่เป็นประจำและเธอได้รับหน้าที่จากคุณแม่ให้นำอาหารและขนมไปเยี่ยมคุณยายที่อาศัยอยู่ที่หมู่บ้านข้างๆ
              </p>
            </div>
{/* ------------------------------------------------------------------------------- */}   
            <div class="col-6 black textp2">
              <p className="textp1 font" style = {{ paddingLeft : 20, margin : 10 , paddingTop: 80}} >A Big Bad Wolf</p>
              <p style = {{ paddingLeft : 40 , paddingRight : 20 ,paddingBottom : 100}}>
                หมาป่าเจ้าเล่ห์ที่มาพบหนูน้อยหมวกแดงเข้าไปทักทายและพยายามคิดกลอุบายที่จะหลอกล่อหนูน้อยหมวกแดงเพื่อหวังที่จับมาเป็นอาหารเย็น
              </p>
            </div>

            <div class="col-6" style={{paddingTop : 30}}>
            <img src="/photo/2.png" /></div>
{/* ------------------------------------------------------------------------------- */}               
            <div class="col-6 black" ><img src="/photo/2.png" /></div>

            <div class="col-6 textp2 black">
              <p className="textp1 font" style = {{ paddingLeft : 20, margin : 10 }}>Grandma</p>
              <p style = {{ paddingLeft : 40 , paddingRight : 20 , margin : 10 , paddingRight : 50}}>
                คุณยายของหนูน้อยหมวกแดงที่อาศัยอยู่ที่หมู่บ้านข้างๆ
                และรอหนูน้อยหมวกแดงเอาอาหารมาเยี่ยมดูอาการป่วยของคุณยาย
              </p>
            </div>
{/* ------------------------------------------------------------------------------- */}      
            <div class="col-6 black textp2">
              <p className="font" style = {{ paddingLeft : 20, margin : 10 ,paddingTop : 40}}>Huntsman</p>
              <p style = {{ paddingLeft : 40 , paddingRight : 20 , margin : 10 }}>นายพรานหนุ่มผู้ใจดีที่ได้ยินเสียงร้องขอความช่วยเหลือจากหนูน้อยหมวกแดงจึงมาช่วยชีวิตหนูน้อยหมวกแดงและคุณยายจากหมาป่าเจ้าเล่ห์ได้สำเร็จ</p>
            </div>

            <div class="col-6" style={{paddingTop : 50}}><img src="/photo/2.png" /></div>
{/* ------------------------------------------------------------------------------- */}   
            <div>
              <div class="col-5 headh2" style={{margin : 30 , paddingLeft : 40}}><h2>STORY </h2></div>
            </div>
{/* ------------------------------------------------------------------------------- */}   
            <div class="col-6 black textp2">
              <p style = {{ paddingLeft : 20 , paddingRight : 20 , margin : 10 }}>
                เด็กสาวหน้าตาน่ารักที่ชอบนั่งเล่นดูคุณแม่ทำอาหารอยู่ในครัวจนเพื่อนบ้านต่างเรียกเธอว่า“หนูน้อยหมวกแดง”เพราะเป็นสีที่เธอชอบใส่อยู่เป็นประจำและเธอได้รับหน้าที่จากคุณแม่ให้นำอาหารและขนมไปเยี่ยมคุณยายที่อาศัยอยู่ที่หมู่บ้านข้างๆ“รีบไปรีบกลับอย่าไปเถลไถลที่ไหน
                อย่าพูดคุยกับคนแปลกหน้าด้วยล่ะเข้าใจไหม ?"
                คุณแม่กำชับด้วยความเป็นห่วง
              </p>
            </div>

            <div class="col-6 black"><img src="/photo/2.png" /></div>
{/* ------------------------------------------------------------------------------- */}   
            <div class="col-6 black" style={{paddingTop : 70}}><img src="/photo/2.png" /></div>
            <div class="col-6 textp2">
              <p style = {{ paddingLeft : 20 , paddingRight : 20 , margin : 10 }}>
                ระหว่างทางไปบ้านคุณยายบังเอิญมีหมาป่าเจ้าเล่ห์เดินมาพบกับหนูน้อยหมวกแดง
                จึงทักทายว่าจะไปไหนหวังจับเด็กหญิงทำเป็นอาหาร
                หนูน้อยหมวกแดงตอบกลับว่า"หนูกำลังไปเยี่ยมคุณยายที่หมู่บ้านใกล้ๆค่ะ"หมาป่าเลยคิดอุบายจะจับคุณยายมาเป็นเหยื่อด้วยอีกคนและชักชวนให้หนูน้อยหมวกแดงออกนอกเส้นทางเพื่อมันจะได้รีบตรงไปจับคุณยายกินก่อนแล้วดักรอหนูน้อยหมวกแดงที่บ้านนั้นเลย
              </p>
            </div>
{/* ------------------------------------------------------------------------------- */}   
            <div class="col-6 textp2 black">
              <p style = {{ paddingLeft : 20 , paddingRight : 20 , margin : 10,paddingTop : 20 }}>
                หนูน้อยหมวกแดงหลงเชื่อคำชวนและเดินเล่น อย่างเพลิดเพลินจนลืมเวลา
                กระทั่งเจ้าหมาป่าเดินทางไปถึงหมู่บ้านข้าง ๆ
                แล้วจับตัวคุณยายซ่อนเอาไว้ในตู้เพื่อปลอมตัว
                เป็นคุณยายนอนป่วยอยู่บนเตียงรอให้หนูน้อยหมวกแดงมาถึงแล้วจับกินทั้งยายทั้งหลานพร้อมกันทีเดียว
                เมื่อหนูน้อยหมวกแดงรู้ตัวว่าทำผิดคำสั่งคุณแม่ก็รีบวิ่ง
                ไปหาคุณยายที่บ้านทันที
                แต่กลับพบว่าคุณยายของเธอนั้นมีท่าทางและหน้าตา
                แปลกประหลาดไปจากเดิม
              </p>
            </div>
            <div class="col-6" style={{paddingTop : 70}}><img src="/photo/2.png" /></div>
{/* ------------------------------------------------------------------------------- */}   
            <div class="col-6" style={{paddingTop : 70}}><img src="/photo/2.png" /></div>

            <div class="col-6 textp2 black">
              <p style = {{ paddingLeft : 20 , paddingRight : 20 , margin : 10 , fontSize : 28 , paddingRight :60} }>
                หนูน้อยจึงถามคำถามต่าง ๆ ด้วยความสงสัย
                กระทั่งสังเกตเห็นเขี้ยวแหลมในปากหมาป่า แล้วค่อย ๆ
                เดินถอยออกมาเพราะเริ่มรู้สึกไม่ปลอดภัยหมาป่าไม่แสร้งทำตัวใจดีอีกต่อไปพร้อมกระโจนมาตะครุบตัวหนูน้อยหมวกแดงอย่างเกรี้ยวกราดโชคดีที่เสียงกรี๊ด
                ของหนูน้อยดังไปถึงนายพรานหนุ่มสองคนที่ผ่านมาพอดี ปัง ปัง ปัง !!!
                เสียงปืนดังขึ้นสามนัด พร้อมกับร่างของหมาป่าดิ้นรนอย่างเจ็บปวด
                นายพรานหนุ่มบุกเข้ามาช่วยชีวิตหนูน้อยหมวกแดง
                และพาคุณยายออกจากตู้เสื้อผ้าได้อย่างปลอดภัย
              </p>
            </div>

{/* ------------------------------------------------------------------------------- */}   

        <div class="col-12 black" style={{marginTop : -200}}><h1>ABOUT US</h1></div>
        

        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>

        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>
        <div class="col-2 black"> 1</div>



{/* ------------------------------------------------------------------------------- */}   
          </div>  
        </div>
      </div>

  );
}
export default App;
