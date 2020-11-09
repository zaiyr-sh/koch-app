import React, {Component} from 'react';
import "./DriverProfile.css";
import camera from "../../../../assets/images/camera_icon.png";

class DriverProfile extends Component {

    state={
        profileImg: camera
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    render() {
        return (
            <section className="section-driverProfile">
                <div className="container">
                    <div className="driver__data">
                        <div className="driver__inner">
                            <h2 className="driver__title">Данные водителя</h2>
                            <form className="driver__form">
                                <div className="driver__name">
                                    <input
                                        type="text"
                                        className="driver__field"
                                        placeholder="Имя"
                                        name="name"
                                    />
                                </div>
                                <div className="driver__surname">
                                    <input
                                        type="text"
                                        className="driver__field"
                                        placeholder="Фамилия"
                                        name="surname"
                                    />
                                </div>

                                <div className="driver__direction">
                                    <p className="driver__direction-title">Местоположение</p>
                                    <div className="driver__direction-from">
                                        <div className="driver__direction-area">
                                            <select className="driver__direction-selection" name="area">
                                                <option value="bishkek">Бишкек</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                        <div className="driver__direction-area">
                                            <select className="driver__direction-selection" name="area">
                                                <option value="area">Тунгуч</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Direction*/}

                                <div className="driver__transport">
                                    <p className="driver__transport-title">Транспорт</p>
                                    <div className="driver__transport-section">
                                        <div className="driver__transport-type">
                                            <select className="driver__transport-type-selection" name="area">
                                                <option value="bishkek">Рефрижератор</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                        <div className="driver__transport-form">

                                        </div>
                                    </div>
                                </div>
                                {/*Driver Transport*/}

                                <div className="driver__transport-size">
                                    <div className="driver__transport-size-section">
                                        <div className="driver__transport-weight">
                                            <select className="driver__transport-type-selection" name="area">
                                                <option value="bishkek">30т</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                        <div className="driver__transport-volume">
                                            <select className="driver__transport-type-selection" name="area">
                                                <option value="bishkek">70м³</option>
                                                <option value="osh">Ошская</option>
                                                <option value="naryn">Нарынская</option>
                                                <option value="issyk_kul">Иссык-Кульская</option>
                                            </select>
                                        </div>
                                        <div className="driver__transport-comments">
                                        <textarea id="transport-comments" className="transport-comments">

                                        </textarea>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Transport Size*/}

                                <div className="driver__documents">
                                    <p className="driver__documents-title">Документы</p>
                                    <div className="driver__documents-section">
                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={this.state.profileImg} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="image-upload"
                                                id="input"
                                                onChange={this.imageHandler}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="input">
                                                    Выберите фото
                                                </label>
                                            </div>
                                            <p className="driver__documents-name">
                                                Свидетельства о ТС “Тех.Паспорт”
                                            </p>
                                        </div>

                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={this.state.profileImg} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="image-upload"
                                                id="input"
                                                onChange={this.imageHandler}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="input">
                                                    Выберите фото
                                                </label>
                                            </div>
                                            <p className="driver__documents-name">
                                                Водительское удостоверенние
                                            </p>
                                        </div>

                                        <div className="driver__documents-passport">
                                            <div className="img__holder">
                                                <img src={this.state.profileImg} alt="" id="img" className="img" />
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="image-upload"
                                                id="input"
                                                onChange={this.imageHandler}
                                            />
                                            <div className="image__label">
                                                <label className="image__upload" htmlFor="input">
                                                    Выберите фото
                                                </label>
                                            </div>
                                            <p className="driver__documents-name">
                                                Паспорт ID
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*Driver Documents*/}

                                <div className="driver__button">
                                    <button className="client__saveButton">Сохранить изменения</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

};

export default DriverProfile;