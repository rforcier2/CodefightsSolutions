swap = (a, i, j) => {
	let t;
	t = a[i];
	a[i] = a[j];
	a[j] = t;
	return a;
}

same= (a, b) => {
	let i;
	for (i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
}

areSimilar = (a, b) => {
	let i, t;
	for (i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			for (j = i + 1; j < a.length; j++) {
				a = swap(a, i, j);
				if ( same(a, b) == true) {
					return true;
				} else {
					a = swap(a, i, j);
				}
			}
			return false;
		}
	}
	return true;
}
