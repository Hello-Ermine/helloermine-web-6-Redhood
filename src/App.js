import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App black">
      <ul>
        <li>
          <a style={{ paddingRight: 80 }} href="#P1">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="#P2">STORY</a>
        </li>
        <li>
          <a href="#P3">CHARACHER</a>
        </li>
        <li>
          <a href="#P4">ORIGINAL STORY</a>
        </li>
        <li>
          <img style={{ marginLeft: -600 }} src="/photo/LOGO.png" />
        </li>
      </ul>

      {/* ------------------------------------------------------------------------------- */}

      <div class="container front">
        <div class="col-12">
          {" "}
          <h1 className="bighead">
            THE LITTLE RED <br />
            RIDING HOOD
          </h1>{" "}
        </div>
      </div>
      {/* ------------------------------------------------------------------------------- */}
      <div>
        <div class="col-5 headh2">
          <h2 id="P4">THE ORIGINAL STORY</h2>
        </div>
        <div class="col-7"></div>
        {/* ------------------------------------------------------------------------------- */}
        <div class="row">
          <div class="col-6 text">
            <p style={{ paddingLeft: 20, paddingRight: 20, margin: 10 }}>
              <b>"หนูน้อยหมวกแดง"</b>
              <br />
              เป็นเทพนิยายยุโรปเกี่ยวกับเด็กสาวกับหมาป่า
              <br />
              เจ้าเล่ห์โดยต้นกำเนิดของนิทานสามารถสืบ
              <br />
              ย้อนไปถึงนิทานพื้นบ้านของยุโรปในช่วงก่อน
              <br />
              ศตวรรษที่ 17 อยู่หลายเรื่อง <br />
              โดยทั้ง 2 เวอร์ชั่นที่รู้จักกันดีที่สุดเขียนขึ้น
              <br />
              โดย
              <b>Chales Perrault และพี่น้องตระกูลกริมส์</b>
            </p>
          </div>

          <div class="col-6 ">
            <img src="/photo/1.png" />
            <h4 class="undertext">
              “Little Red Riding Hood”Illustration by J.W. Smith
            </h4>
          </div>

          {/* ------------------------------------------------------------------------------- */}
          <div class="col-6">
            <img src="/photo/2.png" />
            <h4 class="undertext">
              “Little Red Riding Hood” Illustration by Arthur Rackham
            </h4>
          </div>

          <div class="col-6 text">
            <p
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                margin: 10,
                paddingRight: 50,
                fontSize: 28,
              }}
            >
              ซึ่งเนื้อเรื่องของ”หนูน้อยหมวกแดง”ได้ถูกเปลี่ยนแปลง
              <br />
              และดัดแปลงอยู่ตลอดเวลาโดยมาจากการเล่าซ้ำ
              <br />
              หลายครั้งและมีการดัดแปลงเนื้อหาเพื่อให้เข้ากับ
              <br />
              การนิทานที่ให้มีความทันสมัยมากขึ้นตามยุคสมัยนั้นๆ
              <br />
              ซึ่งชื่ออื่นของเรื่องหนูน้อยหมวกแดงได้แก่
              <br />
              <br />
              <b>“Little Red Cap” หรือ “Red Riding Hood”</b>
            </p>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------- */}
        <div class="col-7"> </div>
        <div class="col-5 headh2R">
          <h2 id="P3">CHARACTERS</h2>
        </div>
        {/* ------------------------------------------------------------------------------- */}
        <div class="row">
          <div class="col-6" style={{ paddingTop: 80 }}>
            <img src="/photo/หนูน้อยหมวกแดง.jpg" />
          </div>

          <div class="col-6 textp2">
            <p
              className="textp1 font"
              style={{ paddingLeft: 20, margin: 10, paddingTop: 80 }}
            >
              Little Red Riding Hood
            </p>
            <p
              style={{
                paddingLeft: 40,
                paddingRight: 20,
                margin: 10,
                paddingRight: 50,
              }}
            >
              {" "}
              เด็กสาวหน้าตาน่ารักที่ชอบนั่งเล่นดูคุณแม่
              <br />
              ทำอาหารอยู่ในครัวจนเพื่อนบ้านต่างเรียกเธอว่า
              <br />
              <b>“หนูน้อยหมวกแดง”</b>
              เพราะเป็นสีที่เธอชอบใส่
              <br />
              อยู่เป็นประจำและเธอได้รับหน้าที่จากคุณแม่ให้
              <br />
              นำอาหารและขนมไปเยี่ยมคุณยายที่
              <br />
              อาศัยอยู่ที่หมู่บ้านข้างๆ
            </p>
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div class="col-6 textp2">
            <p
              className="textp1 font"
              style={{
                paddingLeft: 20,
                margin: 10,
                paddingTop: 80,
                paddingTop: 10,
              }}
            >
              A Big Bad Wolf
            </p>
            <p
              style={{ paddingLeft: 40, paddingRight: 20, paddingBottom: 100 }}
            >
              หมาป่าเจ้าเล่ห์ที่มาพบหนูน้อยหมวกแดงเข้าไป
              <br />
              ทักทายและพยายามคิดกลอุบายที่จะหลอกล่อ
              <br />
              หนูน้อยหมวกแดงเพื่อหวังที่จับมาเป็นอาหารเย็น
            </p>
          </div>

          <div class="col-6" style={{ paddingTop: 30 }}>
            <img src="/photo/หมาป่า.jpg" />
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div class="col-6">
            <img src="/photo/คุณยาย.jpg" />
          </div>

          <div class="col-6 textp2">
            <p className="textp1 font" style={{ paddingLeft: 20, margin: 10 }}>
              Grandma
            </p>
            <p
              style={{
                paddingLeft: 40,
                paddingRight: 20,
                margin: 10,
                paddingRight: 50,
              }}
            >
              คุณยายของหนูน้อยหมวกแดงที่อาศัยอยู่ที่หมู่บ้านข้างๆ
              และรอหนูน้อยหมวกแดงเอาอาหารมาเยี่ยมดูอาการป่วยของคุณยาย
            </p>
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div class="col-6 textp2">
            <p
              className="font"
              style={{ paddingLeft: 20, margin: 10, paddingTop: 40 }}
            >
              Huntsman
            </p>
            <p style={{ paddingLeft: 40, paddingRight: 20, margin: 10 }}>
              นายพรานหนุ่มผู้ใจดีที่ได้ยินเสียงร้องขอความ
              <br />
              ช่วยเหลือจากหนูน้อยหมวกแดงจึงมาช่วยชีวิต
              <br />
              หนูน้อยหมวกแดงและคุณยายจากหมาป่าเจ้าเล่ห์
              <br />
              ได้สำเร็จ
            </p>
          </div>

          <div class="col-6" style={{ paddingTop: 50, marginBottom: 180 }}>
            <img src="/photo/Hunter.png" />
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div>
            <div
              class="col-5 headh2"
              style={{ margin: 30, paddingLeft: 40, marginLeft: 0 }}
            >
              <h2 id="P2">STORY </h2>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div class="col-6 textp2">
            <p
              style={{
                paddingLeft: 50,
                paddingRight: 20,
                margin: 10,
                marginTop: -80,
              }}
            >
              <span style={{ paddingLeft: 40 }}>เด็กสาว</span>
              หน้าตาน่ารักที่ชอบนั่งเล่นดูคุณแม่
              <br />
              ทำอาหารอยู่ในครัวจนเพื่อนบ้านต่างเรียกเธอว่า
              <br />
              <b>“หนูน้อยหมวกแดง”</b>เพราะเป็นสีที่เธอชอบใส่
              <br />
              อยู่เป็นประจำและเธอได้รับหน้าที่จากคุณแม่ให้
              <br />
              นำอาหารและขนมไปเยี่ยมคุณยายที่
              <br />
              อาศัยอยู่ที่หมู่บ้านข้างๆ
              <br />
              “รีบไปรีบกลับอย่าไปเถลไถลที่ไหน
              <br />
              อย่าพูดคุยกับคนแปลกหน้าด้วยล่ะเข้าใจไหม ?"
              <br />
              คุณแม่กำชับด้วยความเป็นห่วง
            </p>
          </div>

          <div class="col-6">
            <img src="/photo/ฉากที่1.jpg" />
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div class="col-6" style={{ paddingTop: 70 }}>
            <img src="/photo/ฉากที่2.jpg" />
          </div>
          <div class="col-6 textp2">
            <p
              style={{
                paddingLeft: 10,
                paddingRight: 40,
                margin: 10,
                fontSize: 28,
              }}
            >
              ระหว่างทางไปบ้านคุณยายบังเอิญมีหมาป่าเจ้าเล่ห์เดินมาพบกับหนูน้อยหมวกแดง
              <br />
              จึงทักทายว่าจะไปไหนหวังจับเด็กหญิงทำเป็นอาหาร
              <br />
              หนูน้อยหมวกแดงตอบกลับว่า"หนูกำลังไปเยี่ยมคุณ
              <br />
              ยายที่หมู่บ้านใกล้ๆค่ะ"
              <br />
              หมาป่าเลยคิดอุบายจะจับคุณยายมาเป็นเหยื่อด้วยอีกคน
              <br />
              และชักชวนให้หนูน้อยหมวกแดงออกนอกเส้นทาง
              <br />
              เพื่อมันจะได้รีบตรงไปจับคุณยายกินก่อน
              <br />
              แล้วดักรอหนูน้อยหมวกแดงที่บ้านนั้นเลย
              <br />
            </p>
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div class="col-6 textp2">
            <p
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                margin: 10,
                marginTop: 0,
                fontSize: 28,
              }}
            >
              หนูน้อยหมวกแดงหลงเชื่อคำชวนและเดินเล่น <br />
              อย่างเพลิดเพลินจนลืมเวลา
              <br />
              กระทั่งเจ้าหมาป่าเดินทางไปถึงหมู่บ้านข้าง ๆ<br />
              แล้วจับตัวคุณยายซ่อนเอาไว้ในตู้เพื่อปลอมตัว
              <br />
              เป็นคุณยายนอนป่วยอยู่บนเตียงรอให้หนูน้อยหมวกแดง
              <br />
              มาถึงแล้วจับกินทั้งยายทั้งหลานพร้อมกันทีเดียว
              <br />
              เมื่อหนูน้อยหมวกแดงรู้ตัวว่าทำผิดคำสั่งคุณแม่ก็รีบวิ่ง
              <br />
              ไปหาคุณยายที่บ้านทันที
              <br />
              แต่กลับพบว่าคุณยายของเธอนั้นมีท่าทางและหน้าตา
              <br /> แปลกประหลาดไปจากเดิม
            </p>
          </div>
          <div class="col-6" style={{ paddingTop: 30 }}>
            <img src="/photo/ฉากที่3.jpg" />
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div class="col-6">
            <img src="/photo/ฉากที่4.png" />
          </div>

          <div class="col-6 textp2">
            <p
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                fontSize: 28,
                paddingRight: 60,
                fontSize: 26,
                marginTop: -60,
                paddingBottom: -20,
              }}
            >
              หนูน้อยจึงถามคำถามต่าง ๆ ด้วยความสงสัย
              <br />
              กระทั่งสังเกตเห็นเขี้ยวแหลมในปากหมาป่า แล้วค่อย ๆ<br />
              เดินถอยออกมาเพราะเริ่มรู้สึกไม่ปลอดภัย
              <br />
              หมาป่าไม่แสร้งทำตัวใจดีอีกต่อไปพร้อมกระโจนมาตะครุบ
              <br />
              ตัวหนูน้อยหมวกแดงอย่างเกรี้ยวกราดโชคดีที่เสียงกรี๊ด
              <br />
              ของหนูน้อยดังไปถึงนายพรานหนุ่มสองคนที่ผ่านมาพอดี
              <br /> ปัง ปัง ปัง !!! เสียงปืนดังขึ้นสามนัด
              <br /> พร้อมกับร่างของหมาป่าดิ้นรนอย่างเจ็บปวด
              <br />
              นายพรานหนุ่มบุกเข้ามาช่วยชีวิตหนูน้อยหมวกแดง
              <br />
              และพาคุณยายออกจากตู้เสื้อผ้าได้อย่างปลอดภัย
            </p>
          </div>

          {/* ------------------------------------------------------------------------------- */}

          <div class="col-12" style={{ marginTop: -100 }}>
            {" "}
            .
          </div>

          <div class="col-4"> .</div>
          <div class="col-4">
            {" "}
            <h2 id="P1" className=" ab font">
              ABOUT US
            </h2>
          </div>
          <div class="col-4"> </div>

          <div class="col-2"> </div>
          <div class="col-2">
            <img src="/photo/Film.png" />
            <p className="textp3">
              Film
              <br />
              FRONT-END
            </p>
          </div>
          <div class="col-2">
            {" "}
            <img src="/photo/Chaba.png" />
            <p className="textp3">
              Chaba
              <br />
              FRONT-END
            </p>
          </div>
          <div class="col-2">
            {" "}
            <img src="/photo/Kevin.png" />
            <p className="textp3">
              Kevin
              <br />
              FRONT-END
            </p>
          </div>
          <div class="col-2">
            {" "}
            <img src="/photo/Gun.png" />
            <p className="textp3">
              Gun
              <br />
              INFRASTRUCTURE
            </p>
          </div>
          <div class="col-2"> </div>

          <div class="col-2"> </div>
          <div class="col-2"> </div>
          <div class="col-2">
            {" "}
            <img src="/photo/Yok.png" />
            <p className="textp3">
              Yok
              <br />
              WEB DESIGN
            </p>
          </div>
          <div class="col-2">
            {" "}
            <img src="/photo/Karn.png" />
            <p className="textp3">
              Karn
              <br />
              WEB DESIGN
            </p>
          </div>
          <div class="col-2"> </div>
          <div class="col-2"> </div>

          {/* ------------------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}
export default App;
