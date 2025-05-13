import style from '../style/loader.module.css'

const Loading = () => {
    return (
        <div className={style.loaderContainer}>
          <div className={style.loaderEscrita}>
                    <img src="../public/img/logoEscura.png" alt="Logo" className={style.loaderLogo} />
                    <h1 className={style.kailow}>Kailow</h1>
                </div>
            </div>
    )
}

export default Loading;