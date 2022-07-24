import { Queen } from "./queen"
import { QueenPlacer, RandomQueenPlacer } from "./queenPlacer"

export var generateQueensBoard = (numberOfQueens: number, queenPlacer: QueenPlacer = new RandomQueenPlacer()): Queen[] => {
    var queens = []
    var attemptsMap = {}

    for(var i = 0; i < numberOfQueens; i++){
        if(!attemptsMap[i]){
            attemptsMap[i] = new Set();
        }
        if([...attemptsMap[i].keys()].length == 64){
            i--;
            if(i < 0){
                throw "This should never happen. There is a solution to the problem"
            }
        }

        var queen = queenPlacer.placeQueen(queens, [...attemptsMap[i].keys()])
        if(queen){
            queens.push(queen)
            attemptsMap[i].add(`${queen.position.toString()}`)
            continue;
        }
        
        
        queens.pop()
        attemptsMap[i] = new Set()
        i -= 2;
    }

    return queens
}

