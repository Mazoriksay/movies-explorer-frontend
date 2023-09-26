export default function convertDuration(duration) {
    const hours = (Math.floor(duration / 60)).toString();
    const minutes = (duration - hours * 60).toString();
    return {hours, minutes};
}