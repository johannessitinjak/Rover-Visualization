// function getJsonToPanel(jsonData) {
//     let jsonPanel = jsonData.state.rovers;
    for (var i = 0; i < 3; i++) {
        document.writeln('<div class="accordion-item">')
        document.writeln('<h2 class="accordion-header" id="headingThree">')
        document.writeln('<button type="button" class="accordion-button collapsed"')
        document.writeln('data-bs-toggle="collapse" data-bs-target="#collapseThree"')
        document.writeln('style="background-color: #f8f9fa; font-size: small" id="rvr3"></button>')
        document.writeln('</h2>')
        document.writeln('<div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">')
        document.writeln('<div class="card-body">')
        document.writeln('<p style="font-weight: 400; font-size: 12px" id="roversName2"></p>')
        document.writeln('<p style="font-weight: 400; font-size: 12px" id="roversColor2">Rover Color : <i class="fa fa-square" aria-hidden="true"></i></p>')
        document.writeln('<p style="font-weight: 400; font-size: 12px" id="roversPlate2"></p>')
        document.writeln('<p style="font-weight: 400; font-size: 12px" id="roversStatus2"></p>')
        document.writeln('</div>')
        document.writeln('</div>')
        document.writeln('</div>')
    }
// }
