export default function HealthBar(array) {
    if (array.health > 50) {
        return 'healthy';
    } 
    if (array.health <= 50 && array.health >= 15) {
        return 'wounded';
    } 
    if (array.health < 15) {
        return 'critical';
    } 
}