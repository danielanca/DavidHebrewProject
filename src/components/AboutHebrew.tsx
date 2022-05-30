import styles from './../components/AboutHebrew.module.scss';

const AboutHebrew = () => {
  return (
    <div id="aboutus" className={styles.wrapperContainer}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <div className={styles.cardBoard}>
              <h3 className={styles.titleName}>{'Despre noi'}</h3>
              <div className={styles.messageDescription}>
                <p>
                  {'Societatea noastră ara la baza satifacerea nevoilor clienților, atât frunizorilor cât și a cumpărătorilor.'}
                </p>
                <p>{'Obiectul principal al firmei este exportul de fructe de padure și europaleți.'}</p>
                <p>
                  {
                    'Deasemenea efectuam import de metale pretioase care sunt adresate cumpărătorilor acestia fiind fie persoane fizice sau pesroane juridice.Asteptam solicitările dumneavoatră la secțiunea contact.'
                  }
                </p>
                <p className={styles.thankyouMessage}>
                  <strong>{'Va mulțumim.'}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHebrew;
