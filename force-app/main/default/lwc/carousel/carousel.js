import { LightningElement } from 'lwc';
import sf_blog_img from '@salesforce/resourceUrl/sf_blog_img';
import number_game_img from '@salesforce/resourceUrl/number_game_img';
import tic_tac_toe_img from '@salesforce/resourceUrl/tic_tac_toe_img';

export default class Carousel extends LightningElement {
    sf_blog_img = sf_blog_img;
    number_game_img = number_game_img;
    tic_tac_toe_img = tic_tac_toe_img;
}