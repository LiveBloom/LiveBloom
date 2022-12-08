import { Helmet } from "react-helmet";
import { Page } from "../../components/widgets/page/Page";
import "./HomePage.scss";

export const HomePage = () => {
    return (
        <Page>
            <Helmet>
                <title>Home</title>
            </Helmet>
            Welcome!
            EYooo
        </Page>
    );
}