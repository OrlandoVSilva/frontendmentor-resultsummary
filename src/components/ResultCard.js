import "./components_css/resultCard.css";
import "./components_css/responsiveResultCard.css";
import ResultSummary from "./resultCard_subcomponents/ResultSummary";
import ResultValue from "./resultCard_subcomponents/ResultValue";
//-----------------------------------
export default function ResultCard(){
    return(
        <div id = "result_card">
            <ResultValue />
            <ResultSummary />
        </div>
    )
}