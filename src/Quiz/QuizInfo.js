import React, { Component } from 'react';

class QuizInfo extends Component {

    render() {
        const { back, quiz, start } = this.props;
        return (
            <div className="container mt-3 text-center">
                <h4 className='display-4 mt-3'>Hi! {localStorage.getItem('username')}</h4>

                <h1 className="display-3">Quiz Info</h1>
                <h3 className="display-5">Quiz Name :  {quiz.name}</h3>
                <h3 className="display-5">Total Marks : {quiz.marks}</h3>
                <h3 className="display-5">Total Question : {this.findLength()}</h3>
                <button className="btn btn-info btn-lg mt-3" onClick={back}>Back to Quizzes</button>
                <button className="btn btn-dark btn-lg ml-3 mt-3" onClick={start}>Start Quiz</button>

            </div>
        );
    }

    findLength = () => {
        const { list, quizIndex } = this.props;
        let a = list[quizIndex].eachQuiz.length;
        // console.log("length", a);
        return a;

    }

}

export default QuizInfo;
