const poetryInput = document.querySelector('.poetryInput')
const poetryResult = document.querySelector('.poetryResult')

poetryInput.addEventListener('change', (e) => poetry(e.target.value.trim()))

export default function poetry(verse) {
  let result = null

  switch (verse[verse.length - 1]) {
    case 'ا':
      result = 'ای خوشا سودای دل از دیده پنهان داشتن'
      break
    case 'ب':
      result = 'بنفشه صبحدم افسرد و باغبان گفتش'
      break
    case 'ن':
      result = 'نهان کرد دیوانه در جیب، سنگی'
      break
    case 'ت':
      result = 'تاجری در کشور هندوستان'
      break
    case 'ی':
      result = 'یکی مرغ زیرک، ز کوتاه بامی'
      break
    case 'م':
      result = 'مرغی بباغ رفت و یکی میوه کند و خورد'
      break
    case 'گ':
      result = 'گفت با جوجه مرغکی هشیار'
      break
    case 'ز':
      result = 'زن در ایران، پیش از این گویی که ایرانی نبود'
      break
    case 'س':
      result = 'سزای رنجبر گلشن امید، بس است'
      break
    case 'د':
      result = 'دور جهان، خونی خونخوارهاست'
      break
    case 'خ':
      result = 'خیال آشنائی بر دلم نگذشته بود اول'
      break
    case 'ه':
      result = 'هر که با پاکدلان، صبح و مسائی دارد'
      break
    case 'ق':
      result = 'قاضی بغداد، شد بیمار سخت'
      break
    case 'ش':
      result = 'شنیده‌اید میان دو قطره خون چه گذشت'
      break
    case 'ک':
      result = 'کرد آسیا ز آب، سحرگاه باز خواست'
      break
    case 'غ':
      result = 'غنچه‌ای گفت به پژمرده گلی'
      break

    default:
      result
  }

  poetryResult.textContent = result

  return result
}
