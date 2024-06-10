console.log(function)

$(document).ready(function() {
    $('.question').click(function() {
        var questionText = $(this).data('question');
        var answerText = $(this).data('answer');
        
        $('#question-text').text(questionText);
        $('#answer-text').text(answerText).hide();
        $('#question-modal').show();
    });

    $('.close').click(function() {
        $('#question-modal').hide();
    });

    $('#show-answer').click(function() {
        $('#answer-text').show();
    });
});
