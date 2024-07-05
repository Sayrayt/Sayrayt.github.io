import Header from "./Header/Header";
import BatteryTagline from "./BatteryTagline/BatteryTagline";
import Services from "./Services/Services";
import './DefaultPage.scss';

function DefaultPage() {
    return (
        <div className="DefaultPage">
            <div className="DefaultPageContent">
                <Header />
                <div className="DefaultPageMain">
                    <BatteryTagline />
                    <Services />
                </div>

            </div>

        </div>
    )
}

export default DefaultPage;