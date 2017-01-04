/**
 * Created by conor.budge on 1/4/2017.
 */

$(document).ready(function () {

"use strict";

let resultsList = $('#resultsList');
resultsList.text("This is from jQuery");
let toggleButton = $('#toggleButton');
toggleButton.on('click', function () {
   resultsList.toggle(500);

   if(toggleButton.text() == 'Hide') {
       toggleButton.text('Show');
   } else {
       toggleButton.text('Hide');
   }
});

// let listItems = $('header nav li');
// listItems.css('font-weight', 'bold');
// listItems.filter(':first').css('font-size', '18px');



// let message = "hello";
// console.log(message);
//
// let resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = "<p>This is changed</p>";
//
// // let result = {
// //   name: "jQuery",
// //   langage: "Javascript",
// //   score: 10,
// //     showLog: function () {
// //
// //     },
// //     owner: {
// //       login: "Conor",
// //       id: 12345
// //     }
// // };
// // result.phoneNumber = "120-903-034";
// //
// // console.log(result);
//
    $("#gitHutSearchForm").on("submit", function () {

        let searchPhrase = $("#searchPhrase").val();
        let useStars = $("#useStars").val();
        let langChoice = $("#langChoice").val();

        if(searchPhrase) {

            resultsList.text("Performing search...");

            let gitHubSearch = "https://api.github.com/search/repositories?q=" + searchPhrase;

            if(langChoice != "All") {
                gitHubSearch += "language:" + langChoice;
            }
            if(useStars) {
                gitHubSearch += "&sort=stars";
            }

            $.get(gitHubSearch)
            //May not be correct, could not find anything on the docs for 'success' function, so I used 'done' instead
                .done(function (r) {
                    displayResults(r.items);
                })
                .fail(function (err) {
                    console.log("Failed to query GitHub");
                });
        }
        return false;
    });




// let results = [{
//         name: "jQuery",
//         langage: "Javascript",
//         score: 4.5,
//         showLog: function () {
//
//         },
//         owner: {
//             login: "Conor",
//             id: 12345
//         }
//     },
//         {
//             name: "jQuery UI",
//             langage: "Javascripts",
//             score: 4,
//             showLog: function () {
//
//             },
//             owner: {
//                 login: "Bill",
//                 id: 1234343434343
//             }
//         }];
function displayResults(results) {
    resultsList.empty();
    $.each(results, function (i, item) {
        let newResult = $("<div class='results'>" +
            "<div class='title'>" + item.name + "</div>" +
            "<div>Language: " + item.language + "</div>" +
            "<div>Owner: " + item.owner.login + "</div>" +
            "</div>");

        newResult.hover(function () {
            $(this).css("background-color", "lightgray");
        }, function () {
            $(this).css("background-color", "transparent");
        });

        resultsList.append(newResult);
    });
}
//
// for(let x = 0; x < results.length; x++) {
//     let result = results[x];
//     if(result.score > 4) continue;
//     console.log(result.name);
// }

// console.log(results.length);
// console.log(results[1].name);

// results.push(result);

// let aNumber = 10;
// if(aNumber === "10") {
//     console.log("10 is 10");
// }
//
// function showMsg(msg, more) {
//     if (more) {
//         console.log("showMsg: " + msg + more);
//     } else {
//         console.log("showMsg: " + msg);
//     }
// }
//
// showMsg("some info");
// showMsg("some info", "more info");
//
// let shwoIt = function (msg) {
//     console.log(msg);
// }
//
// shwoIt("This is something else");
//
// function showitThen(msg, callback) {
//     shwoIt(msg);
//     callback();
// }
//
// showitThen("ShowItThen called", function () {
//     console.log("callback called");
// });
//
// const global = true;
//
// function testMe() {
//     console.log("testMe(): " + global);
//
//     let showMsg = " inside";
//     console.log("testMe(): " + showMsg);
//
//     showitThen("with closer", function () {
//         shwoIt("test me with closure(): " +showMsg);
//     });
// }
//
// testMe();

});