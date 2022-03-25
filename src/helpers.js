// Convert time to hours and minutes
export const calcTime = time =>
{
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money =>
{
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = stateName =>
{
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

export const filterTrailerURL = (movie) =>
{
  const trailer = movie.videos['results'].filter((e) => { return e['name'] == 'Official Trailer' });

  const YOUTUBE_URL = 'https://www.youtube.com/embed/';

  const trailerURL = (trailer.length > 0) ? `${YOUTUBE_URL}${trailer[0]['key']}` : 'No trailer';

  return trailerURL
}
