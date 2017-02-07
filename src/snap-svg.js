
export class SnapSvgCustomElement {

    attached() {
        this.s = Snap(document.getElementById('svg'));

        this.circleOne = this.s.circle(100, 100, 50).attr({
            fill: "blue",
            stroke: "black",
            strokeWidth: 2
        });
        this.circleOne.drag();

        this.ellipseOne = this.s.ellipse(250, 100, 50, 30).attr({
            fill: "yellow",
            stroke: "black",
            strokeWidth: 2
        })
        this.ellipseOne.drag();

        this.lineOne = this.s.path({
            path: Snap.path.getSubpath("M100 210 C 100 300, 250 300, 250 210", 250, 350),
            "fill-opacity": 0,
            stroke: "black",
            strokeWidth: 2
        })
        this.lineOne.drag();
    }

    
}