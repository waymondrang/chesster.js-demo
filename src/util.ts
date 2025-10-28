import { pieces } from "chesster.js";

const {
    BLACK_PAWN,
    WHITE_PAWN,
    BLACK_KNIGHT,
    WHITE_KNIGHT,
    BLACK_ROOK,
    WHITE_ROOK,
    BLACK_BISHOP,
    WHITE_BISHOP,
    BLACK_QUEEN,
    WHITE_QUEEN,
    BLACK_KING,
    WHITE_KING,
} = pieces;

function getPieceFileName(piece: number): string {
    switch (piece) {
        case BLACK_PAWN:
            return "pawn_black";
        case WHITE_PAWN:
            return "pawn_white";
        case BLACK_KNIGHT:
            return "knight_black";
        case WHITE_KNIGHT:
            return "knight_white";
        case BLACK_ROOK:
            return "rook_black";
        case WHITE_ROOK:
            return "rook_white";
        case BLACK_BISHOP:
            return "bishop_black";
        case WHITE_BISHOP:
            return "bishop_white";
        case BLACK_QUEEN:
            return "queen_black";
        case WHITE_QUEEN:
            return "queen_white";
        case BLACK_KING:
            return "king_black";
        case WHITE_KING:
            return "king_white";
        default:
            return "";
    }
}

export { getPieceFileName };
