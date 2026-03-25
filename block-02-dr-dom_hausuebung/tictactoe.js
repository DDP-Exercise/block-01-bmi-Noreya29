"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Noreya Friesacher - 2026-03-24
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];


// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
const size = BATTLEFIELD.length;
for (let row = 0; row < size; ++row) {
    let first = BATTLEFIELD[row][0];
    if (first !== null) {
        let win = true;
        for (let col = 1; col < size; col++) {
            if (BATTLEFIELD[row][col] !== first) {
                win = false;
            }
        }
        if (win) {
            console.log(first + " wins horizontally!")
        }
    }
}

// Check Vertical
for (let col = 0; col < size; col++) {
    let first = BATTLEFIELD[0][col];
    if (first !== null) {
        let win = true;
        for (let row = 1; row < size; row++) {
            if (BATTLEFIELD[row][col] !== first) {
                win = false;
            }
        }
        if (win) {
            console.log(first + " wins vertically!");
        }
    }
}


// Check Main Diagonal
let firstmain = BATTLEFIELD[0][0];
if (firstmain !== null) {
    let win = true;
    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][i] !== firstmain) {
            win = false;
        }
    }
    if (win) {
        console.log(firstmain + " wins on the main diagonal!");
    }
}


// Check Anti Diagonal
let firstanti = BATTLEFIELD[0][size - 1];
if (firstanti !== null) {
    let win = true;
    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][size - 1 - i] !== firstanti) {
            win = false;
        }
    }
    if (win) {
        console.log(firstanti + " wins on the anti diagonal!");
    }
}