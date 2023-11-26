import ResultValueContent from "./ResultValueContent"
//-----------------------------------
export default function ResultValue(){
    return(
        <div className = "innerCard">
            <ResultValueContent data = {<h1>Your Result</h1>}/>
            <ResultValueContent data = {renderNumericScore()}/>
            <ResultValueContent data = {<h1>Great</h1>}/>
            <ResultValueContent data = {<p>You scored higher than 65% of the people who have taken these tests.</p>}/>
        </div>
    )
}

const renderNumericScore = () => {
    return(
        <div className = "numericScore">
            <div id = "numericScore_top">
                <p>76</p>
            </div>
            <div id = "numericScore_bottom">
                <p>out of 100</p>
            </div>
        </div>
    )
}


/*


            <div className = "resultValueContent">
                <h1>Your Result</h1>
            </div>
            <div className = "resultValueContent">
            </div>
            <div className = "resultValueContent">
                <h1>Great</h1>
            </div>
            <div className = "resultValueContent">
                <p>
                    You scored higher than 65% of the people who have taken these tests.
                </p>
            </div>

*/