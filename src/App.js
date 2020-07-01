import React from 'react';
//import background from './background.png'
import testmark from './TR-Testmark_0000074165_DE_CMYK_with-QR-Code.png'
import europacenter from './Ansicht_070207_Europacenter_2.png'

function App() {
  //const value = 'Sachverständiger Thomas Kimpel';
  
  /*const styleMain = {
            width: `100%`,
            height: `100%`,
            backgroundImage: `url(${europacenter})`
        }*/
  
  //const styleMain2 = { width: `100%`, height: `768px`, backgroundImage: `url(${europacenter})`, backgroundRepeat: 'repeat' }
  const styleMain2 = { backgroundImage: `url(${europacenter})` }
  const styleMainCSS = "main-style"

  const styleMainContent = {
            position: 'absolute',
            marginLeft: `620px`,
            marginTop: `40px`,
            color: `#ffffff`,
            fontWeight: 'bold',
            backgroundColor: "blue",
            padding: '30px'
        }

  const styleTestMark = {
            width: `400px`,
            height: `148px`
        }

  const styleLinks = {
            color: `#ffffff`,
            fontWeight: 'bold',
        }
        
  return <div style={styleMain2} className={styleMainCSS}>
            <div style={styleMainContent}>
                Sachverständigen- und Ingenieurbüro Thomas Kimpel<br />
                Dipl.-Bauingenieur (FH)<br />
                Sachverständiger für Schäden an Gebäuden (TÜV)<br />
                <br /><br />
                <u>Leistungen:</u>
                <ul>
                    <li>Erstellen von Gutachten</li>
                    <li>Bauzustandsbewertung</li>
                    <li>Baubegleitende Qualitätskontrolle</li>
                    <li>Durchsetzung von Mangel- / Gewährleistungsansprüchen</li>
                    <li>Begehung vor Hauskauf</li>
                    <li>Technische Prüfung/Bewertung von Bauverträgen</li>
                    <li>Begleitung bei Abnahmen</li>
                </ul>
                <br /><br />
                <u>Kontakt:</u><br />
                Thomas Kimpel<br />
                Bürgerhofweg 10<br />
                36148 Kalbach<br />
                Telefon: 09742 / 932994<br />
                Mobil: 0176 / 12348025<br />
                E-Mail: <a href='mailto:kimpel@sv-kimpel.de' style={styleLinks}>kimpel@sv-kimpel.de</a><br />
                <br /><br />
                Mitglied im BVS <a href='https://www.bvs-ev.de' style={styleLinks}>www.bvs-ev.de</a> (Anwärter)
                <br /><br />
                <img src={(testmark)} style={styleTestMark} alt='Testmark 0000074165' />
            </div>
        </div>;
}

export default App;
