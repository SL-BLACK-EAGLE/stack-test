export const getTimeStamp = (date_created: Date): string => {
    const now = new Date();
    const timeDifference = now.getTime() - date_created.getTime();
  
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
  
    if (daysDifference > 0) {
      return daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
    } else if (hoursDifference > 0) {
      return hoursDifference === 1
        ? "1 hour ago"
        : `${hoursDifference} hours ago`;
    } else if (minutesDifference > 0) {
      return minutesDifference === 1
        ? "1 minute ago"
        : `${minutesDifference} minutes ago`;
    } else {
      return secondsDifference === 1
        ? "1 second ago"
        : `${secondsDifference} seconds ago`;
    }
  };

  // calculate expires time from now
export const getExpires = (expires: Date): string => {
    const now = new Date();
    const timeDifference = expires.getTime() - now.getTime();
  
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
  
    if (daysDifference > 0) {
      return daysDifference === 1 ? "1 day" : `${daysDifference} days`;
    } else if (hoursDifference > 0) {
      return hoursDifference === 1
        ? "1 hour"
        : `${hoursDifference} hours`;
    } else if (minutesDifference > 0) {
      return minutesDifference === 1
        ? "1 minute"
        : `${minutesDifference} minutes`;
    } else {
      return secondsDifference === 1
        ? "1 second"
        : `${secondsDifference} seconds`;
    }
  };