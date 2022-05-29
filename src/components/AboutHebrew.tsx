import styles from './../components/AboutHebrew.module.scss';

const AboutHebrew = () => {
  return (
    <div className={styles.wrapperContainer}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <div className={styles.cardBoard}>
              <h3 className={styles.titleName}>{'Despre noi'}</h3>
              <div className={styles.messageDescription}>
                <p>
                  {
                    'Societatea noastra ara la baza satifacerea nevoilor clentilor,atat frunizorilor cat si a cumparatorilor.Obiectul principal al fimrei este exportul de fructe de padure si europaleti.'
                  }
                </p>
                <p>
                  {
                    'Societatea noastra mai are ca obiect de activitate importul de metale pretioase care sunt adresate cuparatorilor acestia fiind fie personae fizice sau pesroane juridice.Asteptam solicitarile dumneavoatra la sectiunea contact.'
                  }
                </p>
                <p>{'Va multumim.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHebrew;
