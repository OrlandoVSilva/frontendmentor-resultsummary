import ResultSummaryContent from "./ResultSummaryContent"
//-----------------------------------
export default function ResultSummary(){
    return(
        <div className = "innerCard">
            <ResultSummaryContent data = {<h2>Summary</h2>}/>
            <ResultSummaryContent data = {summaryElements("Reaction", "80", "/100")}/>
            <ResultSummaryContent data = {summaryElements("Memory", "91", "/100")}/>
            <ResultSummaryContent data = {summaryElements("Verbal", "62", "/100")}/>
            <ResultSummaryContent data = {summaryElements("Visual", "72", "/100")}/>
            <ResultSummaryContent data = {continueButton()}/>
        </div>
    )
}

const summaryElements = (name, score1, score2) => {
    return(
        <div className = "elementsHousing">
            <div className = "element" id = "elementIcon"></div>
            <div className = "element" id = "elementName"><p>{name}</p></div>
            <div className = "element" id = "elementScore"><p><b>{score1}</b>{score2}</p></div>
        </div>
    )
}

const continueButton = () => {
    return(
        <button id = "continueButton">
            <p>Continue</p>
        </button>
    )
}